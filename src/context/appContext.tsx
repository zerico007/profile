import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import smoothscroll from "smoothscroll-polyfill";

interface IAppContext {
  mobile: boolean;
  orientation: "portrait" | "landscape";
  scrollToElement: (className: string) => void;
  scrollToTopOfPage: () => void;
  // isElementInViewport: (className: string) => boolean;
}

const AppContext = createContext<IAppContext>({
  mobile: false,
  orientation: "landscape",
  scrollToTopOfPage: () => {},
  scrollToElement: () => {},
  // isElementInViewport: () => {
  //   return false;
  // },
});

export const AppContextProvider = ({ children }: { children: JSX.Element }) => {
  const [mobile, setMobile] = useState<boolean>(false);
  const [orientation, setOrientation] = useState<"landscape" | "portrait">(
    "landscape"
  );

  smoothscroll.polyfill();

  const checkIfMobileOrTablet = useCallback(() => {
    window.matchMedia("(max-width: 768px)").matches
      ? setMobile(true)
      : setMobile(false);
  }, []);

  const isPortrait: () => boolean = () =>
    window.matchMedia("(orientation: portrait)").matches;

  const scrollToTopOfPage = useCallback(
    () =>
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      }),
    []
  );

  const scrollToElement = useCallback((className: string) => {
    const element = document.querySelector(`.${className}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

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
  }, [orientation, checkIfMobileOrTablet, scrollToTopOfPage]);

  useEffect(() => {
    isPortrait() ? setOrientation("portrait") : setOrientation("landscape");
  }, []);

  const providerValue = useMemo(
    () => ({
      mobile,
      orientation,
      scrollToTopOfPage,
      scrollToElement,
      // isElementInViewport,
    }),
    [
      mobile,
      orientation,
      scrollToTopOfPage,
      scrollToElement,
      // isElementInViewport,
    ]
  );

  return (
    <AppContext.Provider value={providerValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
