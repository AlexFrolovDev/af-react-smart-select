import React, { FC } from "react";
import { TemplateNameWrapper } from "./TemplateName.styled";

interface TemplateNameProps {}

const TemplateName: FC<TemplateNameProps> = () => {
  return (
    <TemplateNameWrapper data-testid="TemplateNameWrapper">
      TemplateNameWrapper Component
    </TemplateNameWrapper>
  );
};

export default TemplateName;