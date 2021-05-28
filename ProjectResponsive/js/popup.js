/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function toggleRegister(){
              document.getElementById('register').addEventListener('click', function(){
                 document.querySelector('.muncul').style.display = 'flex'; 
              })
            }
 function toggleClose(){
              document.getElementById('close').addEventListener('click', function(){
                 document.querySelector('.muncul').style.display = 'none'; 
              })
            }

