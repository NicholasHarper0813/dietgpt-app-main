import styled from "styled-components";
import { ScreenWrapper as Wrapper } from "../../components/ScreenWrapper";
import { Header } from "./Header";
import { MessageBox } from "./MesssageBox";
import { colors } from "../../values/colors";
import { messageTypes } from "../../values/messageTypes";
import { Options } from "./Options";
import { MessageForm } from "./MessageForm";
import { Loader } from "./Loader";
import { useLayoutEffect, useRef, useState } from "react";
import { useMessages, useSendMessage } from "../../hooks/useMessages";

export function ChatRoomScreen({ userId = 1 }) {
  const {
    isLoading: isFetching,
    error,
    data: messages,
  } = useMessages({ userId });
  const messageEndRef = useRef();
  const inputRef = useRef();
  const { sendMessage } = useSendMessage();

  const lastMessage =
    messages.length === 0 ? null : messages[messages.length - 1];

  const isLoading = isFetching || !lastMessage || !lastMessage.fromBot;
  const isQuestion =
    lastMessage &&
    lastMessage.fromBot &&
    lastMessage.type === messageTypes.QUESTION;

  const handleSubmit = (text) => {
    if (!text) return;

    sendMessage({ userId, text });
  };

  useLayoutEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        messageEndRef.current.scrollIntoView({ behavior: "smooth" });
      }, 0);
    } else {
      setTimeout(() => {
        if (!isQuestion) {
          inputRef.current.value = "";
          // inputRef.current.focus();
        }
        messageEndRef.current.scrollIntoView({ behavior: "smooth" });
      }, 0);
    }
  }, [isLoading, isQuestion, messages]);

  return (
    <SWrapper>
      <SHeader />
      <SMessageBox ref={messageEndRef} data={messages} />

      {/* <Options options={["Yes, let's do it!", "No, I have questions."]} /> */}
      {/* <MessageForm onSubmit={handleSubmit} /> */}
      {isLoading && <SLoader />}
      {isQuestion ? (
        <Options options={lastMessage.options} onSelect={handleSubmit} />
      ) : (
        <MessageForm ref={inputRef} onSubmit={handleSubmit} show={!isLoading} />
      )}
    </SWrapper>
  );
}

const SWrapper = styled(Wrapper)({
  background: colors.dark,
});

const SHeader = styled(Header)({
  marginTop: 12,
});

const SMessageBox = styled(MessageBox)({
  marginTop: 16,
  flexGrow: 1,
});

const SLoader = styled(Loader)({
  marginBlock: 20,
});
