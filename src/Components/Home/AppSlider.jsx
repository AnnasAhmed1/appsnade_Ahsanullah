import React from "react";
import { H4 } from "../../Helper/headings";
import { P1 } from "../../Helper/paragraphs";
import EastSharpIcon from "@mui/icons-material/EastSharp";
import "../../Styles/component.css";
import { useNavigate } from "react-router-dom";

const AppSlider = ({ route, title, pointer = true }) => {
    const navigate = useNavigate();

    return (
        <div data-aos='zoom-in'>
            <h1
                onClick={() => {
                    navigate(`/${route}/${title?.replace((/ /g, `-`))}`);
                }}
                data-aos-offset="200"
                data-aos-delay="100"
                data-aos-duration="2000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
                className="technology-slider-heading"
                style={{
                    cursor: 'pointer' ? 'pointer' : null,

                }}>{title}</h1>
        </div>
    );
};

export default AppSlider;
