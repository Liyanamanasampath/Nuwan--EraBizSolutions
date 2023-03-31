import React from 'react';
import { Component } from 'react';
import {
    Layout,
    Typography,
    Form,
    Button,
    Col,
    Row,
    Input,
    Radio,
    Space,
    Select,
    Checkbox,
    Avatar,
    Card,
    DatePicker,
} from "antd";
import {
    SearchOutlined,
    EditOutlined,
    EllipsisOutlined,
    SettingOutlined,
    CalendarOutlined,
} from "@ant-design/icons";

class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showCalendar: false
        };
    }

    handleIconClick = () => {
        this.setState({
            showCalendar: !this.state.showCalendar
        });
    };

    
    

    render() {
        const { Meta } = Card;
        const { showCalendar } = this.state;

        return (
            <div className="card-section d-flex justify-content-space-between">
                <Card
                    cover={
                        <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                    }
                    actions={[
                        <CalendarOutlined onClick={this.handleIconClick} key="setting"/>,
                        <EditOutlined key="edit"/>,
                        <EllipsisOutlined key="ellipsis"/>,
                    ]}
                >
                    {showCalendar && (
                        <DatePicker
                            showToday={false}
                            onChange={() => {
                                // handle calendar date selection
                            }}
                        />
                    )}
                    <Meta
                        avatar={<Avatar src="https://joesch.moe/api/v1/random"/>}
                        title="Card title"
                        description="This is the description"
                    />
                </Card>
                <Card
                    cover={
                        <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                    }
                    actions={[
                        <CalendarOutlined onClick={this.handleIconClick} key="setting"/>,
                        <EditOutlined key="edit"/>,
                        <EllipsisOutlined key="ellipsis"/>,
                    ]}
                >
                    {showCalendar && (
                        <DatePicker
                            showToday={false}
                            onChange={() => {
                                // handle calendar date selection
                            }}
                        />
                    )}
                    <Meta
                        avatar={<Avatar src="https://joesch.moe/api/v1/random"/>}
                        title="Card title"
                        description="This is the description"
                    />
                </Card>
                <Card
                    cover={
                        <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                    }
                    actions={[
                        <CalendarOutlined onClick={this.handleIconClick} key="setting"/>,
                        <EditOutlined key="edit"/>,
                        <EllipsisOutlined key="ellipsis"/>,
                    ]}
                >
                    {showCalendar && (
                        <DatePicker
                            showToday={false}
                            onChange={() => {
                                // handle calendar date selection
                            }}
                        />
                    )}
                    <Meta
                        avatar={<Avatar src="https://joesch.moe/api/v1/random"/>}
                        title="Card title"
                        description="This is the description"
                    />
                </Card>
            </div>
        );
    }
}

export default Cards;
