import {
  useRef,
  useState,
  useCallback,
  KeyboardEvent,
  ClipboardEvent,
} from "react";

interface OtpInputProps {
  length?: number;
  value: string;
  onChange: (value: string) => void;
}

const OtpInput = ({ length = 6, value, onChange }: OtpInputProps) => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  const digits = value
    .split("")
    .concat(Array(length).fill(""))
    .slice(0, length);

  const handleChange = useCallback(
    (index: number, digit: string) => {
      if (!/^\d?$/.test(digit)) return;
      const newValue = digits.slice();
      newValue[index] = digit;
      onChange(newValue.join(""));
      if (digit && index < length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    },
    [digits, length, onChange],
  );

  const handleKeyDown = useCallback(
    (index: number, e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Backspace" && !digits[index] && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    },
    [digits],
  );

  const handlePaste = useCallback(
    (e: ClipboardEvent<HTMLInputElement>) => {
      e.preventDefault();
      const pasted = e.clipboardData
        .getData("text")
        .replace(/\D/g, "")
        .slice(0, length);
      onChange(pasted);
      const nextIndex = Math.min(pasted.length, length - 1);
      inputRefs.current[nextIndex]?.focus();
    },
    [length, onChange],
  );

  return (
    <div className="flex gap-3">
      {Array.from({ length }).map((_, i) => (
        <input
          key={i}
          ref={(el) => {
            inputRefs.current[i] = el;
          }}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={digits[i] || ""}
          onChange={(e) => handleChange(i, e.target.value)}
          onKeyDown={(e) => handleKeyDown(i, e)}
          onPaste={handlePaste}
          onFocus={() => setFocusedIndex(i)}
          onBlur={() => setFocusedIndex(null)}
          className={`w-16 h-16 text-center text-2xl font-semibold rounded-lg border-2  bg-otp-bg outline-none transition-colors ${
            focusedIndex === i || digits[i]
              ? "border-primary"
              : "border-[#D5E8FC]"
          }`}
          aria-label={`Digit ${i + 1}`}
        />
      ))}
    </div>
  );
};

export default OtpInput;
