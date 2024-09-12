import { ScrollView ,View ,Text, Image , StyleSheet, Button, Linking} from "react-native"

import { Produtos } from "../types/produto";


type Props = {
    produtos : Produtos
    
    
 }

export const ProdutcItem = (props : Props) =>{  
         return (
             <View style={styles.container}>
                 <Image
               source= {{uri: props.produtos.image}}
                 style={styles.image}
                 resizeMode='cover'
     
                 
                 />
     
                 <View style={styles.info}>
                         <Text style={styles.name}>{props.produtos.name}</Text>
                         <Text style={styles.prince}>R$ {props.produtos.price.toFixed(2)}</Text>
                         <Text>Nº de Paginas {props.produtos.paginas}</Text>
                         <Button title="Comprar"  />
                         
                 </View >
     
             </View>
             
     
     
         );
     
     }
     
     const styles = StyleSheet.create({
        container: {
          marginBottom: 10,  // Reduzido para diminuir o espaçamento vertical entre os itens
          marginRight: 10,   // Espaçamento horizontal entre os itens
          flexDirection: "row",
          backgroundColor: 'white',
          borderRadius: 5,
          padding: 5,  // Pequeno padding interno para melhorar o layout
        },
        image: {
          width: 100,  // Ajuste de largura para manter o layout mais compacto
          height: 130,
        },
        info: {
          marginLeft: 10,  // Reduzido para diminuir o espaço entre a imagem e as informações
          justifyContent: 'center',  // Alinha o texto verticalmente ao centro
        },
        name: {
          fontSize: 16,
          fontWeight: 'bold',
          marginBottom: 2  // Reduzido para minimizar o espaço entre as linhas de texto
        },
        prince: {
          color: 'brown',
          fontWeight: 'bold',
          marginBottom: 2  // Reduzido para minimizar o espaço entre as linhas de texto
        }
      });
      