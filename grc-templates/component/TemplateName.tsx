import React, { FC } from "react";
import { TemplateNameWrapper } from "./TemplateName.styled";
import { TemplateNameProps } from "./TemplateName.types";

const TemplateName: FC<TemplateNameProps> = () => {
  return (
    <TemplateNameWrapper data-testid="TemplateNameWrapper">
      TemplateName Component
    </TemplateNameWrapper>
  );
};

export default TemplateName;