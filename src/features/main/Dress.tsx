import * as React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../dataStore/store";
import { getColorVariants } from "./utility";

export interface IDress {
    shirtTone: string
    pantTone: string

}
const Dress: React.FC<IDress> = ({ shirtTone, pantTone }) => {
    const { shade } = useSelector((state: RootState) => state.localSlice)
    const shirtColor = getColorVariants(shirtTone);
    const pantColor = getColorVariants(pantTone);

    const originalWidth = 353;
    const originalHeight = 750;
    const newWidth = 150;
    const newHeight = (originalHeight / originalWidth) * newWidth;



    return (

        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            id="svg10"
            width={newWidth} // Set the new width
            height={newHeight} // Set the calculated height
            style={{
                clipRule: "evenodd",
                fillRule: "evenodd",
                // imageRendering: "optimizeQuality",
                shapeRendering: "geometricPrecision",
                textRendering: "geometricPrecision",
            }}
            viewBox="0 0 1146.88 2597.56"

        >
            <defs id="defs1">
                <style id="style1" type="text/css">
                    {`.fil6{fill:${pantColor["600"]}}.fil2{fill:${pantColor["600"]}}`}
                </style>
            </defs>
            <g id="Layer_x0020_1" transform="translate(-1253.152 403.198)">
                <g id="g22" transform="matrix(2.56 0 0 2.56 1187.431 -403.198)">
                    <path
                        id="polygon1"
                        d="M25.672 419.344V208.288l64 3.056v208z"
                        style={{
                            fill: shirtColor["500"],
                        }}
                    />
                    {shade && <path
                        id="polygon2"
                        d="m25.672 419.344 38.232-29.232 25.768-182.2v211.432z"
                        style={{
                            fill: shirtColor["600"],
                        }}
                    />}
                    <path
                        id="polygon3"
                        d="M409.672 419.344v-208l64-3.432v211.432z"
                        style={{
                            fill: shirtColor["500"],
                        }}
                    />
                    {shade && <path
                        id="polygon4"
                        d="m409.664 419.344 38.248-29.232 25.76-182.2v211.432z"
                        style={{
                            fill: shirtColor["600"],
                        }}
                    />}
                    <path
                        id="polygon5"
                        d="M311.64 11.344H187.984l-93.48 34.152-68.832 162.792 40.984 49.128 58.44-85.408-16.872 327.336H391.44l-16.88-327.32 49.984 76.136 49.128-40.248-67.496-159.904-1.024-2.512z"
                        style={{
                            fill: shirtColor["500"],
                        }}
                    />
                    {shade && <g id="g5">
                        <path
                            id="polyline5"
                            d="m110.352 64.88-84.68 143.408 39.272 49.152 56.728-83.752v325.656h256V173.688l48.432 83.752 47.568-49.528L389.68 64.88"
                            style={{
                                fill: shirtColor["600"],
                            }}
                        />
                    </g>}
                    <g id="g6">
                        <path
                            id="path5"
                            d="M294.784 3.344h-89.92l-24.2 12.344c1.144 2.08 74.176 80.936 69.168 80.936-5.016 0 68.008-79.192 69.16-81.272z"
                            style={{
                                fill: shirtColor["800"],
                            }}
                        />
                        <path
                            id="rect5-0"
                            d="M248.32 96.888h3.024v397.808h-3.024z"
                            style={{
                                fill: shirtColor["800"],
                            }}
                        />
                    </g>
                    {shade && <path
                        id="path6"
                        d="M249.832 23.024c-20.664 0-39.304 5.44-52.704 14.192 19.52 23.728 49.776 60.68 52.704 67.424 2.912-6.744 33.168-43.696 52.68-67.424-13.408-8.752-32.048-14.192-52.68-14.192z"
                        style={{
                            fill: shirtColor["900"],
                        }}
                    />}
                    {shade && <path
                        id="polygon6"
                        d="m208.24 64.528 40.792 41.488-12.152-54.48z"
                        style={{
                            fill: shirtColor["700"],
                        }}
                    />}
                    <path
                        id="polygon7-8"
                        d="M171.16 19.816 199.2 0l37.68 51.536L203 76.992z"
                        style={{
                            fill: shirtColor["300"],
                        }}
                    />
                    <path
                        id="polygon8-4"
                        d="M199.096 19.816 199.2 0l37.68 51.536L203 76.992z"
                        style={{
                            fill: shirtColor["400"],
                        }}
                    />
                    {shade && <path
                        id="polygon9-9"
                        d="m291.392 64.528-40.776 41.488 12.128-54.48z"
                        style={{
                            fill: shirtColor["700"],
                        }}
                    />}
                    <path
                        id="polygon10"
                        d="M328.488 19.816 300.464 0l-37.72 51.536 33.888 25.456z"
                        style={{
                            fill: shirtColor["400"],
                        }}
                    />
                    <path
                        id="polygon11"
                        d="M300.552 19.816 300.464 0l-37.72 51.536 33.888 25.456z"
                        style={{
                            fill: shirtColor["300"],
                        }}
                    />
                    <circle
                        id="circle11"
                        cx={233.344}
                        cy={126.312}
                        r={5.272}
                        style={{
                            fill: "#fff",
                        }}
                    />
                    <path
                        id="path11"
                        d="M229.624 122.592a5.225 5.225 0 0 1 7.448 0 5.244 5.244 0 0 1 0 7.44"
                        style={{
                            fill: "#c7e9ea",
                        }}
                    />
                    <circle
                        id="circle12"
                        cx={233.344}
                        cy={162.536}
                        r={5.272}
                        style={{
                            fill: "#fff",
                        }}
                    />
                    <path
                        id="path12"
                        d="M229.624 158.816a5.24 5.24 0 0 1 7.448 0 5.253 5.253 0 0 1 0 7.448"
                        style={{
                            fill: "#c7e9ea",
                        }}
                    />
                    <circle
                        id="circle13"
                        cx={233.344}
                        cy={198.768}
                        r={5.272}
                        style={{
                            fill: "#fff",
                        }}
                    />
                    <path
                        id="path13"
                        d="M229.624 195.048a5.225 5.225 0 0 1 7.448 0 5.253 5.253 0 0 1 0 7.448"
                        style={{
                            fill: "#c7e9ea",
                        }}
                    />
                    <circle
                        id="circle14"
                        cx={233.344}
                        cy={235}
                        r={5.272}
                        style={{
                            fill: "#fff",
                        }}
                    />
                    <path
                        id="path14"
                        d="M229.624 231.28a5.24 5.24 0 0 1 7.448 0 5.244 5.244 0 0 1 0 7.44"
                        style={{
                            fill: "#c7e9ea",
                        }}
                    />
                    <circle
                        id="circle15"
                        cx={233.344}
                        cy={271.232}
                        r={5.272}
                        style={{
                            fill: "#fff",
                        }}
                    />
                    <path
                        id="path15"
                        d="M229.624 267.504a5.253 5.253 0 0 1 7.448 0 5.263 5.263 0 0 1 0 7.456"
                        style={{
                            fill: "#c7e9ea",
                        }}
                    />
                    <circle
                        id="circle16"
                        cx={233.344}
                        cy={307.424}
                        r={5.272}
                        style={{
                            fill: "#fff",
                        }}
                    />
                    <path
                        id="path16"
                        d="M229.624 303.728a5.24 5.24 0 0 1 7.448 0 5.263 5.263 0 0 1 0 7.456"
                        style={{
                            fill: "#c7e9ea",
                        }}
                    />
                    <circle
                        id="circle17"
                        cx={233.344}
                        cy={343.696}
                        r={5.272}
                        style={{
                            fill: "#fff",
                        }}
                    />
                    <path
                        id="path17"
                        d="M229.624 339.968a5.24 5.24 0 0 1 7.448 0 5.253 5.253 0 0 1 0 7.448"
                        style={{
                            fill: "#c7e9ea",
                        }}
                    />
                    <circle
                        id="circle18"
                        cx={233.344}
                        cy={379.904}
                        r={5.272}
                        style={{
                            fill: "#fff",
                        }}
                    />
                    <path
                        id="path18"
                        d="M229.624 376.184a5.253 5.253 0 0 1 7.448 0 5.263 5.263 0 0 1 0 7.456"
                        style={{
                            fill: "#c7e9ea",
                        }}
                    />
                    <circle
                        id="circle19"
                        cx={233.344}
                        cy={416.152}
                        r={5.272}
                        style={{
                            fill: "#fff",
                        }}
                    />
                    <path
                        id="path19"
                        d="M229.624 412.432a5.225 5.225 0 0 1 7.448 0 5.253 5.253 0 0 1 0 7.448"
                        style={{
                            fill: "#c7e9ea",
                        }}
                    />
                    <circle
                        id="circle20"
                        cx={233.344}
                        cy={452.384}
                        r={5.272}
                        style={{
                            fill: "#fff",
                        }}
                    />
                    <path
                        id="path20"
                        d="M229.624 448.664a5.253 5.253 0 0 1 7.448 0 5.244 5.244 0 0 1 0 7.44"
                        style={{
                            fill: "#c7e9ea",
                        }}
                    />
                    <g id="g21">
                        <path
                            id="polygon20"
                            d="m136.344 499.344-9.424-31.848-9.424 31.848z"
                            style={{
                                fill: shirtColor["800"],
                            }}
                        />
                        <path
                            id="polygon21"
                            d="m382.136 499.344-9.408-31.848-9.432 31.848z"
                            style={{
                                fill: shirtColor["800"],
                            }}
                        />
                    </g>

                    <path
                        id="path22"
                        d="M361.672 136.896a2.446 2.446 0 0 1-2.44 2.448h-75.12a2.446 2.446 0 0 1-2.44-2.448v-3.112a2.445 2.445 0 0 1 2.44-2.44h75.12a2.446 2.446 0 0 1 2.44 2.448z"
                        style={{
                            fill: shirtColor["400"],
                        }}
                    />
                </g>
                <g
                    id="_373912488"
                    style={{
                        clipRule: "evenodd",
                        fillRule: "evenodd",
                        // imageRendering: "optimizeQuality",
                        shapeRendering: "geometricPrecision",
                        textRendering: "geometricPrecision",
                    }}
                    transform="matrix(1.04018 0 0 1 766.084 402.362)"
                >
                    <g id="g7">
                        <path
                            id="path1"
                            d="M720 256h636l4 27 48 319v7c-28 348-1 703 25 1060 2 25 4 50 7 89l3 34h-309l-2-30c-16-288-59-553-107-824-48 271-92 536-107 824l-2 30H608l1-33c4-130 12-258 20-386 17-255 33-510 12-765v-7l47-318 4-27z"
                            style={{
                                fill: pantColor["500"],
                                fillRule: "nonzero",
                            }}
                        />
                        <path
                            id="rect1"
                            d="M684 270h676v64H684z"
                            style={{
                                fill: pantColor["300"],
                            }}
                        />
                        <path id="rect2" d="M817 264h31v77h-31z" style={{
                            fill: pantColor["600"],
                        }} />
                        <path id="rect3" d="M1199 264h31v77h-31z" style={{
                            fill: pantColor["600"],
                        }} />
                        <path
                            id="rect4"
                            d="M0 0h38v77H0z"
                            style={{
                                fill: pantColor["600"],
                            }}
                            transform="matrix(.4705 .04638 -.0981 .99518 678.555 262.876)"
                        />
                        <path
                            id="rect5"
                            d="M0 0h38v77H0z"
                            style={{
                                fill: pantColor["600"],
                            }}
                            transform="matrix(-.4705 .04638 .0981 .99518 1368.88 262.876)"
                        />
                        <rect
                            id="rect6"
                            width={67}
                            height={265}
                            x={988}
                            y={256}
                            rx={4}
                            ry={4}
                            style={{
                                fill: pantColor["600"],
                            }}
                        />
                        <rect
                            id="rect7"
                            width={67}
                            height={265}
                            x={991}
                            y={256}
                            style={{
                                fill: pantColor["600"],
                            }}
                            rx={4}
                            ry={4}
                        />
                    </g>
                    <g id="g10">
                        {shade && <path
                            id="path7"
                            d="M1024 256h332l4 27 48 319v7c-28 348-1 703 25 1060 2 25 4 50 7 89l3 34h-309l-2-30c-16-288-59-553-107-824v1-682z"
                            style={{
                                fill: pantColor["600"],
                                fillRule: "nonzero",
                            }}
                        />}
                        <path
                            id="polygon7"
                            d="M1360 270v64h-336v-64z"
                            style={{
                                fill: pantColor["400"],
                            }}
                        />
                        <path id="polygon8" d="M1199 264v76h31v-76z" style={{
                            fill: pantColor["600"],
                        }} />
                        <path id="polygon9" d="m1351 265 7 76 18-2-7-76z" style={{
                            fill: pantColor["600"],
                        }} />
                        <path
                            id="path9"
                            d="M1024 256h27c2 0 4 2 4 4v258c0 2-2 4-4 4h-27V257Z"
                            style={{
                                fill: pantColor["600"],
                            }}
                        />
                        {shade && <path
                            id="path10"
                            d="M1024 256h31c2 0 4 2 4 4v258c0 2-2 4-4 4h-31V257Z"
                            style={{
                                fill: pantColor["700"],
                            }}
                        />}
                    </g>
                </g>
            </g>
        </svg>

    )
}
export default Dress;



