import React,{useState} from 'react';
 import {View, Text, TextInput, Button, TouchableOpacity} from 'react-native';
 import {styles} from "../../styles/style";

 export default function Content(){
    const [valores, setValores] = useState({
        a:'',
        b:'',
        resultado:'',
        sinal:'',
        igual: ''
    })

    const handleInputChange = (name, value) => {
        setValores({
            ...valores, [name]:value
        })
    }

  
    

    const soma = () =>{
        setValores({...valores, resultado: (valores.a + valores.b), sinal: "+", igual: "="})
    }
    const subtrai =() =>{
        setValores({...valores, resultado: (valores.a - valores.b), sinal: "-", igual: "="})
    }
    const multiplica =()=>{
        setValores({...valores, resultado: (valores.a * valores.b), sinal: "X", igual: "="})
    }
    const divide =()=>{
        setValores({...valores, resultado: (valores.a / valores.b), sinal: "/", igual: "="})
    }
    const resta=()=>{
        setValores({...valores, resultado: (valores.a % valores.b), sinal: "%", igual: "="})
    }
    const aElevado=()=>{
        setValores({...valores, resultado: (valores.a**2)})
    }
    const bElevado=()=>{
        setValores({...valores, resultado: (valores.b**2)})
    }
    const aElevadoB=()=>{
        setValores({...valores, resultado: (valores.a**valores.b), sinal: "^^", igual: "="})
    }
  
       
    
    return(
        <View style={styles.content}>
             <View style={styles.visor}>
                <Text onPress={()=> setValores({...valores, a: "", b:"", resultado: "", igual: "", sinal:""})} 
                    >{valores.a} {valores.sinal} {valores.b} {valores.igual} {valores.resultado}</Text>
            </View>
            <View style={styles.linha}>
                <TextInput placeholder="Digite o valor A" onChangeText={(valor)=>handleInputChange("a", Number(valor))} keyboardType="numeric" style={styles.input}/>
                <TextInput placeholder="Digite o valor B" onChangeText={(valor)=>handleInputChange("b", Number(valor))}  keyboardType="numeric" style={styles.input}/>
            </View>
            <View style={styles.linha}>
                <TouchableOpacity onPress={soma} style={styles.botao}>
                    <Text>+</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={subtrai} style={styles.botao}>
                    <Text>-</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={multiplica} style={styles.botao}>
                    <Text>*</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.linha}>
                <TouchableOpacity  onPress={divide} style={styles.botao}>
                    <Text>/</Text>
                </TouchableOpacity>
            
                <TouchableOpacity title="%" onPress={resta} style={styles.botao}>
                    <Text>%</Text>
               </TouchableOpacity>
                {/* <TouchableOpacity  onPress={aElevado} style={styles.botao}>
                    <Text>A^2</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={bElevado} style={styles.botao}>
                    <Text>B^2</Text>
                </TouchableOpacity> */}
                <TouchableOpacity  onPress={aElevadoB} style={styles.botao}>
                    <Text>A^B</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.linha}>
                <TouchableOpacity  onPress={aElevado} style={styles.botao}>
                    <Text>A^2</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={bElevado} style={styles.botao}>
                    <Text>B^2</Text>
                </TouchableOpacity>
            </View>
            
            
        </View>
    ) 
 }