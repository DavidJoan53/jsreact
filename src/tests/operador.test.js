import { shallow } from 'enzyme'
import Operador from '../components/operador'

describe('Pruebas sobre los botones de suma y resta',()=>{

  //SUMAR
  test('Simular click boton suma',() => {
    const wrapper = shallow(<Operador numUno={12} numDos={8} cadena="Joan Suarez" /> )
    const btn = wrapper.find('button').at(0).simulate('click')
    const texto = wrapper.find('p').at(0).text()

    expect(texto).toBe('Señor "Joan Suarez", el resultado de la suma o resta es 20')
  })

  //RESTAR
  test('Simular click boton resta',() => {
    const wrapper = shallow(<Operador numUno={10} numDos={3} cadena="Joan Suarez" /> )
    const btn = wrapper.find('button').at(1).simulate('click')
    const texto = wrapper.find('p').at(0).text()

    expect(texto).toBe('Señor "Joan Suarez", el resultado de la suma o resta es 7')
  })
})