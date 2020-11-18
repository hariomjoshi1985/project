/// <reference types="Cypress" />

describe('Property Capsule', function() 

{

//Open Web URl

it('Open web URL',function() {


cy.visit("https://www.propertycapsule.com/")


})

//Open Web URl

it('Open web URL',function() {


    cy.visit("https://www.propertycapsule.com/")
    
    
    })

//Naviagate to Menu Tab

it('Navigate to Menu',function() {


    cy.xpath('//*[@id="mobile-open-hamburger-icon"]/div/i').click()
cy.wait(1000)    
})




// Verify and click on the Map Marker Tab    


it('Map Marker Tab',function() {


    cy.xpath('//*[@id="mobile-user-options"]/div[3]/a[3]').click({force:true})
    cy.wait(2000)
    cy.go('back')
    cy.wait(1000)
    cy.xpath('//*[@id="mobile-open-hamburger-icon"]/div/i').click({force:true})
    cy.wait(1000)    
})

// Verify and click on the TourBooks Tab


    it('TourBooks Tab',function() {


        cy.xpath('//*[@id="mobile-user-options"]/div[3]/a[4]').click({force:true})
        cy.go('back')
        cy.wait(1000)
        
        })
    

})



