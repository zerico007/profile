import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import smoothscroll from "smoothscroll-polyfill";

const AppContext = createContext({
  mobile: false,
  orientation: "landscape",
  scrollToTopOfPage: () => {},
});

export const AppContextProvider = ({ children }: { children: JSX.Element }) => {
  const [mobile, setMobile] = useState<boolean>(false);
  const [orientation, setOrientation] = useState<string>("landscape");

  smoothscroll.polyfill();

  const checkIfMobileOrTablet = useCallback(() => {
    window.matchMedia("(max-width: 768px)").matches
      ? setMobile(true)
      : setMobile(false);
  }, []);

  const isPortrait: () => boolean = () =>
    window.matchMedia("(orientation: portrait)").matches;

  const scrollToTopOfPage = () =>
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

  useEffect(() => {
    window.addEventListener("resize", checkIfMobileOrTablet);
    return () => window.removeEventListener("resize", checkIfMobileOrTablet);
  }, [checkIfMobileOrTablet]);

  useEffect(() => {
    checkIfMobileOrTablet();
  }, [checkIfMobileOrTablet]);

  useEffect(() => {
    scrollToTopOfPage();
    checkIfMobileOrTablet();
  }, [orientation, checkIfMobileOrTablet]);

  useEffect(() => {
    isPortrait() ? setOrientation("portrait") : setOrientation("landscape");
  }, []);

  return (
    <AppContext.Provider
      value={{
        mobile,
        orientation,
        scrollToTopOfPage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
