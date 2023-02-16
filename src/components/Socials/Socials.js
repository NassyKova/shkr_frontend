import React from "react";
import {
    FacebookOutlined,
    TwitterOutlined,
    InstagramOutlined,
} from "@ant-design/icons";

import { Space } from "antd";

import { Wrapper } from "./Socials.Styles";

const Socials = () => {
    return (
        <Wrapper>
            <Space>
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                    <FacebookOutlined />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                    <TwitterOutlined />
                </a>
                <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    <InstagramOutlined />
                </a>
            </Space>
        </Wrapper>
    );
};

export default Socials;
