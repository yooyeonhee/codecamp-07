export default function PromiseAllPage() {
  //   const onClickPromise = async () => {
  //     const result1 = await new Promise((resolve, reject) => {
  //       setTimeout(() => {
  //         resolve("https://dog.jpg");
  //       }, 3000);
  //     });
  //     console.log(result1);
  //   };

  //   const onClickPromise = () => {
  //     new Promise((resolve, reject) => {
  //       setTimeout(() => {
  //         resolve("https://dog.jpg");
  //       }, 3000);
  //     }).then((res) => console.log(res));
  //   };

  const onClickPromise = async () => {
    console.time("시작");
    const result1 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("https://dog1.jpg");
      }, 3000);
    });
    const result2 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("https://dog2.jpg");
      }, 2000);
    });
    const result3 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("https://dog3.jpg");
      }, 1000);
    });
    console.timeEnd("시작");
  };

  const onClickPromiseAll = async () => {
    console.time("시작");
    const result = await Promise.all([
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("https://dog1.jpg");
        }, 3000);
      }),
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("https://dog2.jpg");
        }, 2000);
      }),
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("https://dog3.jpg");
        }, 1000);
      }),
    ]);
    console.timeEnd("시작");
    console.log(result);
  };

  return (
    <>
      <button onClick={onClickPromise}>Promise 연습하기 </button>
      <button onClick={onClickPromiseAll}>promise-all 연습하기</button>;
    </>
  );
}
