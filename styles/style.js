import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    header:{
        flex:1,
        flexDirection: 'row',
        height:110,
        backgroundColor:'#ef233c',
        justifyContent: 'center',
        alignItems: 'center',
        
        
    },
    textHeader:{
        fontSize: 35,
        color: '#EADFF0'
    },
    content:{
        backgroundColor: '#edf2f4',
        width: 376,
        marginBottom:50
    },
    footer:{
        backgroundColor:'#ef233c',
        height: 40
    },
    visor:{

        height: 90,
        marginTop:10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input:{
        height: 60,
        width: 150,
        marginBottom:19
    },
    linha:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'

    },
    botao:{
        margin: 10,
        backgroundColor: '#8d99ae',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height:65,
        borderRadius: 30
    
    },
    textBotao:{
        fontSize:20
    }

})