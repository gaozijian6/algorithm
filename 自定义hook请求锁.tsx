import axios from "axios";
import { useCallback, useRef, useState } from "react";
import { Button } from "antd";

function App() {
  function useRequestLock(requestFn: (...args: any[]) => Promise<any>) {
    const [loading, setLoading] = useState(false);
    const lockRef = useRef(false);

    const execute = useCallback(
      async (...args: any[]) => {
        if (lockRef.current) {
          return;
        }

        lockRef.current = true;
        setLoading(true);

        return requestFn(...args).finally(() => {
          lockRef.current = false;
          setLoading(false);
        });
      },
      [requestFn]
    );

    return { loading, execute };
  }

  async function request() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return axios.post("http://127.0.0.1:3000/api/v1/test");
  }

  const { loading, execute } = useRequestLock(request);

  return (
    <div>
      <Button onClick={() => execute()} loading={loading}>
        click
      </Button>
    </div>
  );
}

export default App;
