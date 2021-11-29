import {useRef, useState, useEffect, FC, SVGProps} from 'react';

interface UseDynamicSVGImportOptions {
  onCompleted?: (
    name: string,
    SvgIcon: FC<SVGProps<SVGSVGElement>> | undefined
  ) => void;
  onError?: (err: Error | undefined) => void;
}

interface IReturnHooks {
  error: Error | undefined;
  loading: boolean;
  SvgIcon: FC<SVGProps<SVGSVGElement>> | undefined;
}

export const useDynamicSVGImport = (
  name: string,
  options: UseDynamicSVGImportOptions = {}
): IReturnHooks => {
  const ImportedIconRef = useRef<FC<SVGProps<SVGSVGElement>>>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | undefined>();

  const { onCompleted, onError } = options;
  useEffect(() => {
    setLoading(true);
    const importIcon = async (): Promise<void> => {
      try {
        ImportedIconRef.current = (
          await import(`!!@svgr/webpack?-svgo,+titleProp,+ref!../assets/icons/${name}.svg`)
          ).default;
        onCompleted?.(name, ImportedIconRef.current);
      } catch (err: any) {
        onError?.(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    importIcon();
  }, [name, onCompleted, onError]);
  
  return { error, loading, SvgIcon: ImportedIconRef.current };
}