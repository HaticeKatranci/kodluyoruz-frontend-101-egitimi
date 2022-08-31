// ********** Merhaba Dunya Ornekleri ********** 

// Dokumana(document) Yazdirma Islemi ile Merhaba Dunya:
// document.write('Merhaba Dunya');

// Uyari Mesaji (Alert) ile Merhaba Dunya:
// alert("Merhaba Dunya")

// console.log ile Merhaba Dunya:


// function LargestPair(num) { 

  
//     var array = [];
    
//     var length = num.toString().length;
  
//     for (var i= 0; i<length; i++){
//       if (i+1<length){
//         var newNum = num.toString()[i] + num.toString()[i+1];
//         array.push(parseInt(newNum));
//       }
//     }
//   num =Math.max.apply(Math, array);
  
  
//     return num; 
  
//   }
     

//   console.log(LargestPair(564454584587));








// function HistogramArea(arr) { 
//     let stack = []
//     let max_area = 0 
//     let index = 0
//     while(index < arr.length){
//         if(stack.length == 0 || arr[stack[stack.length-1]] <= arr[index]){
//             stack.push(index)
//             index += 1
//         }
//         else{
//             let top_of_stack = stack.pop()
//             let area = (arr[top_of_stack] *
//                 (stack.length > 0 ? (index - stack[stack.length-1] - 1) : index))
//             max_area = Math.max(max_area, area)
//         }
//     }
//     while(stack.length > 0){
//         let top_of_stack = stack.pop()
//         let area = (arr[top_of_stack] *
//             (stack.length > 0 ? (index - stack[stack.length-1] - 1) : index))
//         max_area = Math.max(max_area, area)
//     }
//     return max_area
// }
// let hist = [5, 6, 7, 4, 1];
//   console.log(HistogramArea(hist));





// function max(a, b)
// {
//     if (a > b)
//         return a;
//     else
//         return b;
// }

// function lcs(X, Y, m, n)
// {
//     var L = new Array(m + 1);
//     for(var i = 0; i < L.length; i++)
//     {
//         L[i] = new Array(n + 1);
//     }
//     var i, j;

//     for(i = 0; i <= m; i++)
//     {
//         for(j = 0; j <= n; j++)
//         {
//             if (i == 0 || j == 0)
//                 L[i][j] = 0;
//             else if (X[i - 1] == Y[j - 1])
//                 L[i][j] = L[i - 1][j - 1] + 1;
//             else
//                 L[i][j] = max(L[i - 1][j], L[i][j - 1]);
//         }
//     }
 
//     return L[m][n];
// }

// var x = "bcacb";
// var y = "aacabb";
 
// var m = x.length;
// var n = y.length;
 
// document.write("Length of LCS is " + lcs(x, y, m, n));
 


// function lcs(  X,  Y , m , n )
// {
//     if (m == 0 || n == 0)
//     return 0;
//     if (X[m-1] == Y[n-1])
//     return 1 + lcs(X, Y, m-1, n-1);
//     else
//     return max(lcs(X, Y, m, n-1), lcs(X, Y, m-1, n));
// }
// function max(a , b)
// {
//     return (a > b)? a : b;
// }
//     var s1 = "bcacb";
//     var s2 = "aacabb";
//     var X=s1;
//     var Y=s2;
//     var m = X.length;
//     var n = Y.length;
//     document.write("Length of LCS is" + " " + lcs( X, Y, m, n ) );


    

//       function LCS(a,b) { 
        
//     return LCSstr(a,b,a.length,b.length);
         
//          }
//          function max(a , b)
//          {
//              return (a > b)? a : b;
//          }
//          // keep this function call here 
//          console.log(LCS("abc","cb"));
    
// function LCSstr(a,b,c,d){
   
//            if (m == 0 || n == 0)
//            return 0;
//            if (str1[m-1] == str2[n-1])
//            return 1 + LCS(str1, str2, m-1, n-1);
//            else
//            return max(LCS(str1, str2, m, n-1), LCS(str1, str2, m-1, n));
// }

// function LCS(strArr) { 

// return LCSstr(strArr[0],strArr[1],strArr[0].length,strArr[1].length )

  
  
//   }
     
//   // keep this function call here 
//   console.log(LCS(readline()));




  