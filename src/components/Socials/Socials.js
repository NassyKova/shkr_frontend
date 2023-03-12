import React from "react";
import {
    FacebookOutlined,
    TwitterOutlined,
    InstagramOutlined,
} from "@ant-design/icons";
import { Space } from "antd";
import { Wrapper, Hover1 } from "./Socials.Styles";

// This is a functional component called Socials
const Socials = () => {
    return (
        // The component returns a wrapper that contains links to social media pages
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
                <Hover1>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <TwitterOutlined />
                    </a>
                </Hover1>
                <Hover1>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <InstagramOutlined />
                    </a>
                </Hover1>
            </Space>
        </Wrapper>
    );
};

export default Socials;
