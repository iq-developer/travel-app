import React from 'react'
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from './App'
import HeaderContainer from './Containers/HeaderContainer'
import {Route} from 'react-router-dom'
import {languageFunc} from './common/functions/functions'
import Footer from "./Components/Footer/Footer";

configure({
    adapter: new Adapter()
})

describe('Start 10 tests with difference JEST functions', ()=>{
    it('App has HeaderContainer', ()=> {
        const wrapper = shallow(<App lang='en'/>)
        expect(wrapper.find(HeaderContainer)).toHaveLength(1)
    })

    it('App has only one Footer', ()=> {
        const wrapper = shallow(<App lang='en'/>)
        expect(wrapper.find(Footer).length).toBeLessThan(2)
    })

    it('App has more than 3 Routes', ()=> {
        const wrapper = shallow(<App lang='en'/>)
        expect(wrapper.find(Route).length).toBeGreaterThanOrEqual(4)
    })

    it('LanguageFunc return expected value', ()=> {
        expect(languageFunc('English', 'Русский', 'English', 'Germany')).toBe('English')
    })

    it('LanguageFunc no return wrong value', ()=> {
        expect(languageFunc('English', 'Русский', 'English', 'Germany')).not.toBe('Русский')
    })

    it('LanguageFunc return not object', ()=> {
        expect.not.objectContaining(languageFunc('English', 'Русский', 'English', 'Germany'))
    })

    it('LanguageFunc return not object', ()=> {
        expect.not.arrayContaining(languageFunc('English', 'Русский', 'English', 'Germany'))
    })

    it('LanguageFunc return string', ()=> {
        expect.stringContaining(languageFunc('English', 'Русский', 'English', 'Germany'))
    })

    it('LanguageFunc is Undefined with wrong params', ()=> {
        expect(languageFunc('Japan', 'Русский', 'English', 'Germany')).toBeUndefined()
    })

    it('LanguageFunc is Defined with wrong params', ()=> {
        expect(languageFunc('Deutsche', 'Русский', 'English', 'Germany')).toBeDefined()
    })
})
