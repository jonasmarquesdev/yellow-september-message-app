import {
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  SafeAreaView,
} from "react-native";
import { CardHeader } from "../components/CardHeader";

import { PhraseExtends } from "../components/PhraseExtends";
import { Img } from "../components/SecCardHeader";

export default function Info() {
  return (
    <ScrollView>
      <SafeAreaView style={styles.Scroll}>
        <View style={styles.container}>
          <StatusBar
            barStyle="light-content"
            backgroundColor="transparent"
            translucent
          />

          <Img />

          <PhraseExtends title="Transtornos mentais" />
          <PhraseExtends title="você sabia que praticamente todas as pessoas que cometeram suicídio apresentavam pelo menos um transtorno psiquiátrico? Pessoas com depressão, transtorno bipolar, trantornos relacionados ao uso de drogas lícitas ou ilícitas(álcool, maconha, crack e cocaína, por exemplo), esquizofrenia e transtorno de personalidade fazem parte do grupo de risco. Dessa forma, a identificação e o tratamento dos trastornos mentais pelo médico psiquiatra estão entre os principais fatores de proteção na prevenção do suicídio." />

          <PhraseExtends title="Histórico pessoal" />
          <PhraseExtends title="Tentativa prévia é o principal fator de risco para o suicídio. Individuos que já tentaram o suicídio têm de cinco a seis vezes mais chances de tentar novamente." />

          <PhraseExtends title="Ideação suicida" />
          <PhraseExtends title='Comentários que demonstrem desespero, desesperança e desamparo podem ser manifestação de uma ideação suicida. Atenção a expressões como "eu desejaria não ter nascido", "caso não nos encontremos de novo", "eu preferia estar morto" - são sinais de alerta.' />

          <PhraseExtends title="Fatores estressores crônicos e recentes" />
          <PhraseExtends title="Eventos estressores significativos, como separação conjugal, migração ou perda de uma pessoa próxima, além daqueles que levem a prejuízo econômico e social, como falência e perda do emprego, estão associados ao surgimento de pensamentos suicidas." />

          <PhraseExtends title="Organizar detalhes e fazer despedidas" />
          <PhraseExtends title='É de extrema importância observar se existe algum comportamento que sugira uma preparação para o suicídio: mensagens de despedida (bilhetes ou recados nas mídias sociais), cartaz, testamentos, doação de posses importantes e acúmulo de comprimidos são alguns exemplos. Além disso, verificar se há "comportamento de despedida", como ligações incomuns a parentes ou amigos dizendo adeus, como se não fosse vê-los outra vez.' />

          <PhraseExtends title="Meios acessíveis para suicidar-se" />
          <PhraseExtends title='Acesso a armas de fogo, locais elevados e medicação em grande quantidade aumenta a chance de que uma eventual tentativa de suicídio seja efetivada.' />

          <PhraseExtends title="Impulsividade" />
          <PhraseExtends title='O suicídio, por mais planejado que tenha sido, muitas vezes parte de um ato motivado por eventos negativos. O impulso para cometer o suicídio é geralmente transitório, com duração de alguns minutos ou horas e pode estar presente particularmente em jovens e adolescentes. A impulsividade pode ser acentuada na presença de abuso de substâncias.' />

          <PhraseExtends title="Eventos adversos na infância e na adolescência" />
          <PhraseExtends title='Ter sofrido maus tratos e abuso fisico, sexual ou psicológico na infância, apresentar abuso ou dependência de substâncias lícitas ou ilícitas e falta de apoio social estão associados a maior risco de suicídio. É importante lembrar que queda no desempenho escolar pode ser reflexo de um transtorno psiquiátrico não diagnosticado.' />

          <PhraseExtends title="Motivos aparentes ou ocultos" />
          <PhraseExtends title='Algumas pessoas com pensamentos suicidas podem considerar a morte como um "meio de sair do sentimento momentâneo de infelicidade", "acabar com a dor", "encontrar descanso" ou "final mais rápido para os seus sofrimentos". Comentários com esse tipo de conteúdo servem como sinal de alerta.' />

          <PhraseExtends title="Presença de outras doenças" />
          <PhraseExtends title='Doenças crônicas, incluindo neoplasias em fase terminal, são fatores de risco para suicídio. O acompanhamento de pacientes que apresentem condições médicas com essas características deve incluir atenção especial à sua saúde mental.' />
          
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
// #ffd401
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffd401",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 60,
    paddingBottom: 60,
  },
  Scroll: {
    flex: 1,
  },
});
