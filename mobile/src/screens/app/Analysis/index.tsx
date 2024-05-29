import React from "react";
import { View, SafeAreaView, ScrollView } from "react-native";

import { LineChart } from "react-native-gifted-charts"

import theme from "../../../utils/theme";
import { style } from "./styles";
import Header from "../../../components/Header";
import TextApp from "../../../components/Text";

import dataIMC from './dataIMC';
import dataUterina from "./dataUterina";

export default function Analysis() {



  const weeks = Array.from({ length: 36 }, (_, i) => (i + 1).toString());
  
  

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.shape}}>
      <ScrollView style={style.container}>
        <Header title="Meus Gráficos" />

        <View style={style.textBox}>
          <View style={{ height:'50%', justifyContent: "center",  flexDirection: "row", alignItems: "center"}}>
            <TextApp size={20} text="Idade Gestacional"  color={theme.colors.primary}/>
          </View>
          <View style={{ flexDirection: "row",  height:'50%', justifyContent: "space-around"}}>
            <TextApp size={20} text="167 dias" color={theme.colors.gray_400} />
            <TextApp size={20} text="5 meses" color={theme.colors.gray_400}/>
            <TextApp size={20} text="23 semanas" color={theme.colors.gray_400}/>
          </View>
         
        </View>

        

        <View style={style.textBox}>
          <View style={{ height:'50%', justifyContent: "center",  flexDirection: "row", alignItems: "center"}}>
            <TextApp size={20} text="Data provável do parto"  color={theme.colors.primary}/>
          </View>
          <View style={{ flexDirection: "row",  height:'50%', justifyContent: "space-around"}}>
            <TextApp size={20} text="" color={theme.colors.gray_400} />
            <TextApp size={20} text="9 de outubro de 2024" color={theme.colors.gray_400}/>
            <TextApp size={20} text="" color={theme.colors.gray_400}/>
          </View>
        </View>

        <View style={{ paddingHorizontal: 20, gap: 6, paddingVertical: 20}}>
        <TextApp size={20} text="Acompanhamento nutricional"/>
          

          <LineChart
          data={dataIMC.baixo_peso}
          data2={dataIMC.adequado}
          data3={dataIMC.sobrepeso}
          data4={dataIMC.meuIMC}
          
          height={160}
          showVerticalLines
          xAxisLabelTexts={weeks}
          

          
          spacing={44}
          initialSpacing={0}
          color1="orange"
          color2="skyblue"
          color3="purple"
          
          color4="pink"
          textColor1="green"
          
          dataPointsHeight4={6}
          dataPointsWidth4={6}
          dataPointsColor4="pink"
          textShiftY={-2}
          textShiftX={-5}
          textFontSize={0}
        
        
      />
      <View style={{justifyContent: "center", alignItems: "center"}}>
          <TextApp size={16} text="Semanas"  color={theme.colors.gray_400}/>
          </View>
          
        </View>

        
        

        <View style={style.textBox}>
          <View style={{ height:'50%', justifyContent: "center",  flexDirection: "row", alignItems: "center"}}>
            <TextApp size={18} text="Meu IMC: 21.6"  color={theme.colors.gray_400}/>
          </View>
          <View style={{ flexDirection: "row",  height:'50%', justifyContent: "space-around"}}>
            <View style={{flexDirection: "row", alignItems: "center", gap: 6}}>
              <View style={{width: 10, height: 10, backgroundColor: 'orange'}}></View>
              <TextApp size={14} text="Baixo peso" color={theme.colors.gray_400} />
            </View>

            <View style={{flexDirection: "row", alignItems: "center", gap: 6}}>
              <View style={{width: 10, height: 10, backgroundColor: 'skyblue'}}></View>
              <TextApp size={14} text="Adequado" color={theme.colors.gray_400} />
            </View>

            <View style={{flexDirection: "row", alignItems: "center", gap: 6}}>
              <View style={{width: 10, height: 10, backgroundColor: 'red'}}></View>
              <TextApp size={14} text="Sobrepeso" color={theme.colors.gray_400} />
            </View>
          </View>
        </View>

      

        <View style={{ paddingHorizontal: 20, gap:6, paddingVertical: 20}}>
          <TextApp size={20} text="Curva Uterina" />
          
          <LineChart
            data={dataUterina.P10}
            data2={dataUterina.P90}
            data3={dataUterina.JD}
            
            height={160}
            showVerticalLines
            xAxisLabelTexts={weeks}
            spacing={44}
            initialSpacing={0}
            color1="orange"
            color2="skyblue"
            color3="purple"
            
            textColor1="green"

            dataPointsColor1="orange"
            
            textShiftY={-2}
            textShiftX={-5}
            textFontSize={0}
          />
          <View style={{justifyContent: "center", alignItems: "center"}}>
          <TextApp size={16} text="Semanas"  color={theme.colors.gray_400}/>
          </View>
        </View>

        <View style={[style.textBox, {marginBottom: 40}]}>
          <View style={{ height:'50%', justifyContent: "center",  flexDirection: "row", alignItems: "center"}}>
            <TextApp size={18} text="Altura uterina: 18.0"  color={theme.colors.gray_400}/>
          </View>
          <View style={{ flexDirection: "row",  height:'50%', justifyContent: "space-around"}}>
            <View style={{flexDirection: "row", alignItems: "center", gap: 6}}>
              <View style={{width: 10, height: 10, backgroundColor: 'orange'}}></View>
              <TextApp size={14} text="P10" color={theme.colors.gray_400} />
            </View>

            <View style={{flexDirection: "row", alignItems: "center", gap: 6}}>
              <View style={{width: 10, height: 10, backgroundColor: 'skyblue'}}></View>
              <TextApp size={14} text="P90" color={theme.colors.gray_400} />
            </View>

            <View style={{flexDirection: "row", alignItems: "center", gap: 6}}>
              <View style={{width: 10, height: 10, backgroundColor: 'red'}}></View>
              <TextApp size={14} text="JD" color={theme.colors.gray_400} />
            </View>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
