// Loader.jsx
type LoaderProps= {
  height?: string,
  width?: string
};
export default function Loader({width,height}:LoaderProps) {
  return (
    <div className={`${width?width:"w-[76px]"} ${height?height:"h-[76px]"} mx-auto border-5 border-primary border-t-transparent rounded-full animate-spin`}></div>
  );
}