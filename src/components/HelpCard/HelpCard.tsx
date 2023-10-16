import { Typography } from "antd";
import React from "react";
import styles from "./styles.module.scss";
import { THelpCardProps } from "./types";

const HelpCard = ({ title, actions }: THelpCardProps) => {
  return (
    <div className={styles["help-card"]}>
      <div className={styles["help-card__content"]}>
        <div>
          <div className={styles["help-card__content--texts"]}>
            <Typography.Title level={4} color="magenta-6">
              {title}
            </Typography.Title>
          </div>
        </div>
        <div>{actions}</div>
      </div>
    </div>
  );
};

export default HelpCard;
