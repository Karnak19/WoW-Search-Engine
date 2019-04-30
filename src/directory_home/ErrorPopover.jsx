import React from "react";
import { OverlayTrigger, Popover } from "react-bootstrap";

const popover = (
    <Popover id="popover-basic" title="Popover right">
        Small mistake in your search
    </Popover>
);

const ErrorPover = () => <OverlayTrigger trigger="click" placement="right" overlay={popover} />;

export default ErrorPover;
