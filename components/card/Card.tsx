import { Card } from "antd";
import React, { FunctionComponent } from "react";

interface CardProps {
  title?: string;
}
const MyCard: FunctionComponent<CardProps> = ({ title }) => {
  return <Card title={title} />;
};

export default MyCard;
