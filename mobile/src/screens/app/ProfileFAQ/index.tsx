import React, { useState } from "react";
import { View, ScrollView, Text } from "react-native";
import { List, Appbar } from "react-native-paper";
import faqData from "./faqData";
import { styles } from "./styles";
import { useProfileNavigation } from "../../../hooks/navigation";

export default function ProfileFAQ() {
  const [expanded, setExpanded] = useState(0);

  const navigate = useProfileNavigation();

  const handlePress = (index: any) => {
    setExpanded(expanded === index ? null : index);
  };
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigate.goBack()} />
        <Appbar.Content title="FAQ" />
      </Appbar.Header>
      <ScrollView>
        <List.Section style={{ marginBottom: 50 }}>
          {faqData.map((item, index) => (
            <List.Accordion
              key={index}
              title={item.question}
              expanded={expanded === index}
              onPress={() => handlePress(index)}
            >
              <Text style={styles.textBox}>{item.answer}</Text>
            </List.Accordion>
          ))}
        </List.Section>
      </ScrollView>
    </View>
  );
}
