import { forwardRef } from "react";
import styled from "styled-components";
import { colors } from "../../values/colors";

export const MessageBox = forwardRef(({ data, className }, ref) => {
  return (
    <MessageBoxWrapper className={className}>
      {data?.map?.((message) => (
        <MessageItem key={message.id} message={message} />
      ))}
      <MessageEnd ref={ref} />
    </MessageBoxWrapper>
  );
});

const MessageBoxWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: 18,
  overflowY: "auto",
});

const MessageEnd = styled.div({
  marginTop: 30,
});

function MessageItem({ message }) {
  return (
    <MessageItemWrapper fromBot={message.fromBot}>
      {message.content}
    </MessageItemWrapper>
  );
}

const MessageItemWrapper = styled.div({
  color: colors.white,
  padding: "12px 16px",
  borderRadius: 24,
  maxWidth: "70%",
  minWidth: 35,
  marginLeft: (props) => (props.fromBot ? "0px" : "auto"),
  marginRight: (props) => (props.fromBot ? "auto" : "0px"),
  background: (props) => (props.fromBot ? colors.grey : colors.blue),
});
