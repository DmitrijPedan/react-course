import {useEffect, useRef} from "react";

export const useObserver = (ref, autoLoad, canLoad, isLoading, clb) => {

  const observer = useRef();

  useEffect(() => {
    if (!autoLoad) {
      return;
    }
    if (isLoading) {
      return;
    }
    if (observer.current) {
      observer.current.disconnect();
    }
    const callback = function(entries, observer) {
      if (entries[0].isIntersecting && canLoad) {
        clb();
      }
    };
    observer.current = new IntersectionObserver(callback);
    observer.current.observe(ref.current);
  }, [isLoading]);
}
