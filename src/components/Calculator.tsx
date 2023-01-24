import React from "react";

type Props = {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const Calculator: React.FC<Props> = ({ setVisible }) => {
  const [toggle, setToggle] = React.useState<boolean>(false);
  const [exp1, setExp1] = React.useState<string>("0");
  const [exp2, setExp2] = React.useState<string>("0");
  const [result, setResult] = React.useState<boolean>(false);
  const [methord, setMethord] = React.useState<string>("");
  const outputRef = React.useRef<HTMLDivElement>(null);

  const orangeButton =
    "w-[60px] h-[60px] bg-[#ff9e08] flex justify-center items-center active:opacity-50 text-3xl ";
  const lightButton =
    "w-[60px] h-[60px]  bg-[rgba(225,225,225,0.5)] flex justify-center items-center active:opacity-50 ";
  const darkButton =
    "w-[60px] h-[60px] bg-[rgba(69,68,66,0.5)]  flex justify-center items-center active:opacity-50";

  const handleMod = () => {
    setMethord("%");
  };
  const handleDiv = () => {
    setMethord("/");
  };
  const handleMul = () => {
    setMethord("*");
  };
  const handleSub = () => {
    setMethord("-");
  };
  const handleAdd = () => {
    setMethord("+");
  };
  const handleTailingZero = () => {
    if (methord === "") {
      if (exp1.length === 1 && exp1[0] === "0") return;
      if (exp1[0] === "0" && exp1[1] !== ".") {
        if (methord === "") {
          if (exp1[0] === "0") {
            setExp1(exp1.slice(1));
          }
        }
      }
    }
    if (exp2.length === 1 && exp2[0] === "0") return;
    if (exp2[0] === "0" && exp2[1] !== ".") {
      if (exp2[0] === "0") {
        setExp2(exp2.slice(1));
      }
    }
  };
  const handleFact = () => {
    if (methord === "") {
      let fact = 1;
      for (let i = 1; i <= Number(exp1); i++) {
        fact *= i;
      }
      setExp1(fact.toFixed(2).toString());
    }
  };
  const handleSqrt = () => {
    if (methord === "") {
      setExp1(Math.sqrt(Number(exp1)).toFixed(2).toString());
    }
  };
  const handleCubeRoot = () => {
    if (methord === "") {
      setExp1(Math.cbrt(Number(exp1)).toFixed(2).toString());
    }
  };
  const handleLn = () => {
    if (methord === "") {
      setExp1(Math.log(Number(exp1)).toFixed(2).toString());
    }
  };
  const handleLogTen = () => {
    if (methord === "") {
      setExp1(Math.log10(Number(exp1)).toFixed(2).toString());
    }
  };
  const handleSin = () => {
    if (methord === "") {
      setExp1(Math.sin(Number(exp1)).toFixed(2).toString());
    }
  };
  const handleCos = () => {
    if (methord === "") {
      setExp1(Math.cos(Number(exp1)).toFixed(2).toString());
    }
  };
  const handleTan = () => {
    if (methord === "") {
      setExp1(Math.tan(Number(exp1)).toFixed(2).toString());
    }
  };
  const handleOneDivide = () => {
    if (methord === "") {
      setExp1((1 / Number(exp1)).toFixed(2).toString());
    }
  };
  const handleSquare = () => {
    if (methord === "") {
      setExp1(Math.pow(Number(exp1), 2).toFixed(2).toString());
    }
  };
  const handleCube = () => {
    if (methord === "") {
      setExp1(Math.pow(Number(exp1), 3).toFixed(2).toString());
    }
  };
  const handleExp = () => {
    if (methord === "") {
      setExp1(Math.exp(Number(exp1)).toFixed(2).toString());
    }
  };
  const handleSinh = () => {
    if (methord === "") {
      setExp1(Math.sinh(Number(exp1)).toFixed(2).toString());
    }
  };
  const handleCosh = () => {
    if (methord === "") {
      setExp1(Math.cosh(Number(exp1)).toFixed(2).toString());
    }
  };
  const handleTanh = () => {
    if (methord === "") {
      setExp1(Math.tanh(Number(exp1)).toFixed(2).toString());
    }
  };

  const handleE = () => {
    if (methord === "") {
      setExp1(Math.E.toFixed(3).toString());
    }
  };
  const handlePi = () => {
    if (methord === "") {
      setExp1(Math.PI.toFixed(3).toString());
    }
  };

  handleTailingZero();
  const handleEqual = () => {
    console.log("equal");
    if (methord === "") return;
    try {
      setExp1(eval(exp1 + methord + exp2));
      setResult(true);
      setExp2("0");
      console.log(eval(exp1 + methord + exp2));
    } catch {
      console.log("error");
    }
  };
  const handlePluseMinus = () => {
    if (exp2 === "0") setExp1((Number(exp1) * -1).toString());
    else setExp2((Number(exp2) * -1).toString());
  };

  console.log(exp1, exp2, methord);

  return (
    <div className=" bg-[rgba(50,50,47,0.3)]  mt-[100px] absolute backdrop-blur-md shadow-2xl rounded-xl text-white  ">
      {/* navigation */}
      <div className="flex flex-row space-x-2 p-[8px] rounded-t-xl">
        <div
          className="w-[15px] h-[15px] rounded-full bg-red-400 cursor-pointer"
          onClick={() => {
            setVisible(false);
            setExp1("0");
            setExp2("0");
            setMethord("");
          }}
        ></div>
        <div
          className="w-[15px] h-[15px] rounded-full bg-yellow-400 cursor-pointer"
          onClick={() => setToggle(!toggle)}
        ></div>
        <div
          className="w-[15px] h-[15px] rounded-full bg-green-400 cursor-pointer"
          onClick={() => setVisible(false)}
        ></div>
      </div>
      {/* display */}
      <div
        ref={outputRef}
        className="w-[100%]  flex flex-row-reverse text-white text-5xl pr-[19px] pb-[3px]"
      >
        {exp2 === "0" ? exp1 : exp2}
      </div>

      {/* scientific calculator */}
      <div className="flex flex-row ">
        {toggle && (
          <div className=" w-[366px] h-[306px] flex flex-wrap gap-[1px]">
            <div className={darkButton}>(</div>
            <div className={darkButton}>)</div>
            <div className={darkButton}>mc</div>
            <div className={darkButton}>m+</div>
            <div className={darkButton}>m-</div>
            <div className={darkButton}>mr</div>
            <div className={darkButton}>
              2<sup>nd</sup>
            </div>
            <div className={darkButton} onClick={handleSquare}>
              x<sup>2</sup>
            </div>
            <div className={darkButton} onClick={handleCube}>
              x<sup>3</sup>
            </div>
            <div className={darkButton}>
              x<sup>y</sup>
            </div>
            <div className={darkButton} onClick={handleExp}>
              e<sup>x</sup>
            </div>
            <div className={darkButton}>
              10<sup>x</sup>
            </div>
            <div className={darkButton} onClick={handleOneDivide}>
              1/x
            </div>
            <div className={darkButton} onClick={handleSqrt}>
              <sup>2</sup>√x
            </div>
            <div className={darkButton} onClick={handleCubeRoot}>
              {" "}
              &#8731;x
            </div>
            <div className={darkButton}>
              <sup>y</sup>√x
            </div>
            <div className={darkButton} onClick={handleLn}>
              ln
            </div>
            <div className={darkButton} onClick={handleLogTen}>
              log<sub>10</sub>
            </div>
            <div className={darkButton} onClick={handleFact}>
              x!
            </div>
            <div className={darkButton} onClick={handleSin}>
              sin
            </div>
            <div className={darkButton} onClick={handleCos}>
              cos
            </div>
            <div className={darkButton} onClick={handleTan}>
              tan
            </div>
            <div className={darkButton} onClick={handleE}>
              e
            </div>
            <div className={darkButton}>EE</div>
            <div className="w-[60px] h-[60px] bg-[rgba(69,68,66,0.5)]  flex justify-center items-center rounded-bl-xl active:opacity-50">
              Rad
            </div>
            <div className={darkButton} onClick={handleSinh}>
              sinh
            </div>
            <div className={darkButton} onClick={handleCosh}>
              cosh
            </div>
            <div className={darkButton} onClick={handleTanh}>
              tanh
            </div>
            <div className={darkButton} onClick={handlePi}>
              π
            </div>
            <div className={darkButton}>Rand</div>
          </div>
        )}

        {/* standard calculator */}
        <div className=" w-[245px]  flex flex-wrap  gap-[1px]">
          <div
            className={darkButton}
            onClick={() => {
              setExp1("0");
              setExp2("0");
              setMethord("");
            }}
          >
            AC
          </div>
          <div className={darkButton} onClick={handlePluseMinus}>
            +/-
          </div>
          <div className={darkButton} onClick={handleMod}>
            %
          </div>
          <div className={orangeButton} onClick={handleDiv}>
            ÷
          </div>
          <div
            className={lightButton}
            onClick={() => {
              if (methord === "" && result === false) {
                setExp1(`${exp1}7`);
              } else {
                setExp2(`${exp2}7`);
              }
            }}
          >
            7
          </div>
          <div
            className={lightButton}
            onClick={() => {
              if (methord === "" && result === false) {
                setExp1(`${exp1}8`);
              } else {
                setExp2(`${exp2}8`);
              }
            }}
          >
            8
          </div>
          <div
            className={lightButton}
            onClick={() => {
              if (methord === "" && result === false) {
                setExp1(`${exp1}9`);
              } else {
                setExp2(`${exp2}9`);
              }
            }}
          >
            9
          </div>
          <div className={orangeButton + "text-xl"} onClick={handleMul}>
            X
          </div>
          <div
            className={lightButton}
            onClick={() => {
              if (methord === "" && result === false) {
                setExp1(`${exp1}4`);
              } else {
                setExp2(`${exp2}4`);
              }
            }}
          >
            4
          </div>
          <div
            className={lightButton}
            onClick={() => {
              if (methord === "" && result === false) {
                setExp1(`${exp1}5`);
              } else {
                setExp2(`${exp2}5`);
              }
            }}
          >
            5
          </div>
          <div
            className={lightButton}
            onClick={() => {
              if (methord === "" && result === false) {
                setExp1(`${exp1}6`);
              } else {
                setExp2(`${exp2}6`);
              }
            }}
          >
            6
          </div>
          <div className={orangeButton} onClick={handleSub}>
            -
          </div>
          <div
            className={lightButton}
            onClick={() => {
              if (methord === "" && result === false) {
                setExp1(`${exp1}1`);
              } else {
                setExp2(`${exp2}1`);
              }
            }}
          >
            1
          </div>
          <div
            className={lightButton}
            onClick={() => {
              if (methord === "" && result === false) {
                setExp1(`${exp1}2`);
              } else {
                setExp2(`${exp2}2`);
              }
            }}
          >
            2
          </div>
          <div
            className={lightButton}
            onClick={() => {
              if (methord === "" && result === false) {
                setExp1(`${exp1}3`);
              } else {
                setExp2(`${exp2}3`);
              }
            }}
          >
            3
          </div>
          <div className={orangeButton} onClick={handleAdd}>
            +
          </div>
          <div
            className={`w-[121px] h-[60px] bg-[rgba(225,225,225,0.5)] flex justify-center items-center active:opacity-50 rounded-bl-${
              toggle ? "" : "xl "
            }`}
            onClick={() => {
              if (methord === "" && result === false) {
                setExp1(`${exp1}0`);
              } else {
                setExp2(`${exp2}0`);
              }
            }}
          >
            0
          </div>
          <div
            className={lightButton}
            onClick={() => {
              if (methord === "" && result === false) {
                setExp1(`${exp1}.`);
              } else {
                setExp2(`${exp2}.`);
              }
            }}
          >
            .
          </div>
          <div
            className="w-[60px] h-[60px] bg-[#ff9e08] flex justify-center items-center rounded-br-xl active:opacity-50 text-3xl"
            onClick={handleEqual}
          >
            =
          </div>
        </div>
      </div>
    </div>
  );
};
export default Calculator;
