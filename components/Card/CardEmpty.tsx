import Loader from "../Loader";

interface Props {
  isLoading: boolean;
}

const CardEmpty = ({ isLoading }: Props) => (
  <div className="w-[90%] md:max-w-[600px] mx-auto text-center py-20">
    {isLoading ? (
      <Loader  />
    ) : (
      <span className="md:text-[32px] text-[16px] font-manrope font-semibold text-center text-para">
        We haven't reached your suburb yet. Be the first to start the community!
      </span>
    )}
  </div>
);

export default CardEmpty;