
export default function Spinner() {
    return (
        <>
            <div className="Spinner">
                <div className="Loader"></div>
            </div>

            <style jsx>
                {`
            .Spinner{
                position: flex;
                top: 0;
                left: 0;
                z-index: 1;
                width: 25%;
                height: 25%;
                background: black;
                animation: changePage 1s linear infinite;
            }
            
            @keyframes changePage {
                to{
                    filter: hue-rotate(360deg);
                }
            }
            
            .Loader{
                width: 30px;
                height: 30px;
                position: absolute;
                top: calc(50% - (15px));
                left: calc(50% - (15px));
                border-radius: 50%;
                animation: x-axis 1s ease-in-out alternate infinite;
            }
            @keyframes x-axis {
                0% {transform: translate(-60px);}
                100% {transform: translate(60px);}
            }
            .Loader::before{
                content: "";
                width: 100%;
                height: 100%;
                position: absolute;
                background: #fff;
                border-radius: 50%;
                box-shadow: 0 0 5px #dc1ce3,
                            0 0 25px #dc1ce3,
                            0 0 50px #dc1ce3,
                            0 0 75px #dc1ce3;
                animation: y-axis 0.5 ease-in-out 0.25s alternate infinite;
            }
            `}
            </style>
        </>)
}