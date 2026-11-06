import { useState, useMemo, useEffect } from 'react';

export default function useQuery(
  fn: () => Promise<any>,
  args: ReadonlyArray<any>
): {
  loading: boolean;
  data?: any;
  error?: any;
} {
  const [state, setState] = useState({
    loading: true,
    data: null,
    error: null
  });
  const memoized = useMemo(fn, args);
  useEffect(() => {
    Promise.resolve(memoized).then(
      (data: any) => setState({ loading: false, data, error: null }),
      (error: any) => setState({ loading: false, data: null, error })
    );
  }, [memoized]);
  return state;
}
