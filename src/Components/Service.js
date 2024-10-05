import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
    width:580px;
    height:400px;
    border:1px solid #000;
    background-color:#D0D0D0;
    padding: 0 15px 0 15px;
`;
const Title = styled.h4`
    color:#000000;
    font-weight:500;
    margin:12px 0 8px 0;
`;
const Content = styled.div`
    margin-bottom: 12px;
`;
const Icon = styled.span`
    padding-right:4px;
`;
const Included = styled.div`
    margin-bottom:12px;
`;
const TitleMain = styled.h5`
    margin-bottom:4px;
    font-weight:500;
    font-size:18px;
    color:#000000;
`;
const UnorderList = styled.ul`
    padding:0;
    margin:0;
`;
const List = styled.li`
    list-style-type:none;
`;

const ServiceComponent = () => {
    return(
        <StyledContainer>
            <Title>Services</Title>
            <Content>
                ✓ Lorem ipsum dollor sit amet.
                consectetut adipiscing sit.
            </Content>
            <Included>
                <TitleMain>Included Services</TitleMain>
                <UnorderList>
                    <List>
                        <Icon>✓</Icon>Delivery of appliance
                    </List>
                    <List>
                        <Icon>✓</Icon>DishWasher of installation
                    </List>
                </UnorderList>
            </Included>
            <Included>
                <TitleMain>Not Included Services</TitleMain>
                <UnorderList>
                    <List>
                        <Icon>✓</Icon>Gas hookup
                    </List>
                </UnorderList>
            </Included>
            <Included>
                <TitleMain>Important Information</TitleMain>
                <UnorderList>
                    <List>
                        <Icon>✓</Icon>Electrical hardWriting.if required,at an additional fee (member pays installer)
                    </List>
                    <List>
                        <Icon>✓</Icon>Haul-away of old appliance (when uninstalled by member)
                    </List>
                    <List>
                        <Icon>✓</Icon>Permits may be required by local reguiation (member pays installer for permit)
                    </List>
                </UnorderList>
            </Included>
        </StyledContainer>
    );
}
export default ServiceComponent;