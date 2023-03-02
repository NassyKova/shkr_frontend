import React from "react";
import {
    FacebookOutlined,
    TwitterOutlined,
    InstagramOutlined,
} from "@ant-design/icons";


import { Space } from "antd";

import { Wrapper, Hover1 } from "./Socials.Styles";

const Socials = () => {
    return (
        <Wrapper>
            <Space>
                <Hover1>
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FacebookOutlined />
                    </a>
                </Hover1>
                <Hover1><a href="https://twitter.com" target="_blank" rel="noreferrer">
                    <TwitterOutlined />
                </a></Hover1>
                <Hover1><a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    <InstagramOutlined />
                </a></Hover1>
            </Space>
        </Wrapper>
    );
};

export default Socials;
