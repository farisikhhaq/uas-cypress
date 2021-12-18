//Nama          : Hisyam Haryo Mahdyan
//No Absen/NIM  : 10/1941720186
//Kelas         : TI-3A
//Test Case     : Menjalankan Menu Pada Sidebar

it.only('lms jti polinema test', function () {
    cy.visit('http://lms.jti.polinema.ac.id/login/index.php')

    cy.get('span.login')
    .click()

    cy.get('#username.form-control')
    .type('1941720186')

    cy.get('#password.form-control')
    .type('1941720186')

    cy.get('#loginbtn')
    .click()

    cy.get('button.btn.pull-xs-left.m-r-1.btn-secondary')
    .click()

    cy.get('[data-key=mycourses]')
    .click()

    cy.title().should('include','My Courses')
    cy.screenshot()


})