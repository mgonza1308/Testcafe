import {Selector} from 'testcafe';
fixture('testcafe demo')
.page('https://www.google.cl')

test('first-test', async t =>{
    //const receta = Selector('li#new_tottus_nav_cliente_recetas')
    
    await t
        .typeText('input[name="q"]','tottus nataniel')
        .click('input[name="btnK"]')
        .click(Selector('h3.LC20lb.DKV0Md').withText('tottus nataniel'))
        .click(Selector('#new_tottus_nav_cliente_recetas').find('a').find('img'))
        .click(Selector('button').withText('ALTA'))
        .click(Selector('h3').withText('CORONA DE ROLLITOS DE CANELA'))
        .maximizeWindow( )
        .drag(Selector('#hero').find('p').withText('– 15g canela en polvo'), -88, 0, {
            offsetX: 111,
            offsetY: 11
        })
        //.expect(Selector('#hero').find('p')).contains('canela')
        .expect(Selector('#hero').find('p').withText('– 15g canela en polvo'))
        //.expect(Selector('#hero').find('p')).contains('azúcar rubia')
});

