import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { messageTypes } from "../values/messageTypes";

export function useMessages({ userId }) {
  const { isLoading, error, data } = useQuery({
    queryKey: ["messages", userId],
    queryFn: () =>
      axios
        .get(`${process.env.REACT_APP_API_ENDPOINT}/messages/${userId}`)
        .then((response) => response.data)
        .then((response) => response.messages)
        .then((messages) =>
          messages.map((message) => ({
            id: message.id,
            content: message.content,
            fromBot: message.from_bot,
            type: message.type,
            options: message.options,
            timestamp: message.timestamp,
          }))
        ),
  });

  return { isLoading, error, data: data ? data : [] };
}

export function useSendMessage() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({ text, userId }) => {
      return axios.post(
        `${process.env.REACT_APP_API_ENDPOINT}/messages/${userId}`,
        {
          userId: userId,
          content: text,
        }
      );
    },
    onSuccess: (data, variables, context) => {
      console.log(data, variables);
      queryClient.invalidateQueries(["messages", variables.userId]);
    },
    onMutate: (data, variables, context) => {
      queryClient.setQueryData(["messages", data.userId], (prev) => [
        ...prev,
        {
          id: -1,
          userId: data.userId,
          content: data.text,
          type: messageTypes.TEXT,
          fromBot: false,
          timestamp: new Date().toString(),
        },
      ]);
    },
  });

  return { sendMessage: mutation.mutate };
}
