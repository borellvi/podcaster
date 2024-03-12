import { Link } from "react-router-dom";

type ScreenWrapperProps = {
  isLoading?: boolean;
  children: React.ReactNode;
};

export const ScreenWrapper = ({
  isLoading = false,
  children,
}: ScreenWrapperProps) => (
  <>
    <nav className="flex items-center justify-between p-5 border-b border-gray-300">
      <Link to="/">
        <h1 className="text-2xl text-blue-500 font-bold">Podcaster</h1>
      </Link>
      {isLoading && (
        <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-b-4 border-r-2 border-l-2 border-blue-500" />
      )}
    </nav>
    <div className="flex items-center justify-center">
      <div className="max-w-screen-xl p-4">{!isLoading && children}</div>
    </div>
  </>
);
