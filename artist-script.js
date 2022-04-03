window.onload = () => {
    addEventlistenerToHearts();
    seeMoreEventListener();

}
    /* This is the Eventlistener */
    let addEventlistenerToHearts = (event) => {
        let unfilledHearts = document.querySelectorAll(".popup");
        for (let i = 0; i < unfilledHearts.length; i++) {
        document.addEventListener("click", heartFilledFunction);
    }
}
/* This is the eventlistener for the See more Text */
let seeMoreEventListener = (event) => {
    let seeMoreText = document.querySelector(".see-more-text")
    seeMoreText.addEventListener("click", seeMoreTextFunction);
}

/* ALL ABOVE ARE EVENTLISTENERS  */





/* THIS IS TEH SEE MORE FUNCTION THAT ADDS 1 MORE SONG TO THE TABLE */
let seeMoreTextFunction = (event) => {
  console.log(event)
  let table = document.querySelector(".table");
  let newTr = document.createElement("tr");
  let newTr2 = document.createElement("tr");
  let newTr3 = document.createElement("tr");
  let newTr4 = document.createElement("tr");
  let newTr5 = document.createElement("tr");
  table.appendChild(newTr)
  table.appendChild(newTr2)
  table.appendChild(newTr3)
  table.appendChild(newTr4)
  table.appendChild(newTr5)
  newTr.innerHTML = `
  <tr>
  <th scope="row">5</th>
  <td>
    <img
      src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIPDxASDxISEhAKDQwNDQwMDR8JGA8MJSEnJyUhJCQpLi4zKSwrLSQkNDg0LC8xNTU1KCQ7QDszPy40NTEBDAwMDw8PFBAPGDErJR0xNDExNDE/MzQxMT8xNDQxMTExMTE/MTExMTExMTExMTExNDExMTExMTExMTExMTExMf/AABEIANkA3AMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAQIDBAYAB//EAEsQAAIABAMEBQgEDAQFBQAAAAECAAMREgQhMQUiQVETMmFxsQZCUnKBkaHRVJLB8AcUIzM0U2JzdJPh8RUWJEM1Y4KisiVEhJTC/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAHREBAQEAAgMBAQAAAAAAAAAAAAERIUECElFSMf/aAAwDAQACEQMRAD8A1KS1tXdTqS/9sch2Qti+in1F+Ucg3U9SX4CFrFQ0ovop/LX5Rwlr6KfUX5QpjoDrF9FPqL8oTo19BP5a/KFjqwHWL6Cfyx8oSxfQT6g+ULHCASxfQT+WPlD5eFL1tlX25G2SGp7aR0qXc6qP9xlQEcKmlYI7YNjpKWqpJRKKrFak1zNOOUNA1sPRrDLAclQEaSFJY6ZUhz4QoKvKtBNoLSQgry0gjJXpsJNDGr4Us0tybiuVaV1prDtusSMPmc5TNmTm2WZhoGJhSwqsq5RcCyyQwDDtpDzgJn6hv/r/ANImwrnoMTQmgWRoxXU0NPZBDESpszD4bo7i1q3kTOjpkMyeMQBzgmBC9CbnDFVMgVKjUgU7YcNnv+obl+jj5RYlzZnTyUdrvxecZauK1YVzqeMW9pyJ3TTZgLKkpFZWvNCQBkAONaw0wJXCMSQJJJQ0YLJDWtyNBrDUw9WtVAxN26JQY5a5AVgjs/GOpxMzVhKWYyiqgkHOg4ZRNjJQ6STiJR3J02XcVNtrEgV7joe2GgO8m00ZArDVWlhSOWVIQIvoJ/LHyixjSemm9k2YASS2hNPhEFYoTo19FP5Y+UKUX0U/lj5QtYSsB3Rr6Cfyx8o6xfRXLQWD5QtY6sQJ0a+in8sfKOsX0E+oPlHQ6sUIEX0U/lr8okVFz3U1PmL8oYDEixBCh3U9SX4COhEyVf3cvwELWKOJjo4wkBxMLCR1YBYSsLDYByOVKsuqMrLXS4GsFMcpxJWbJF9yBZkoEXIw5j2wIcVBFStwoGWlV7RXjEUuU6srCdOqjXDfUZ+waRLvTUks20aZhh8O8tiOmxJYOqsG6NaUzI0NPGH4hfxqXKMsrfJWx5LMFIyGle6Kk3H3jflS3cCnS0MsntIHGBf4qT/vTvrLlxyy0hyskv8AaLzF6CS6OVMzEPLBRWuslg1zIyBJi7jJDtIw6pbfICmYBNClGpzrzjNjDH9dO7r0z+EIcKf1033p8onK+nh9HpOCdWluzAzDiFZlDhqSxmSTzyh+0cLMafMdCtsxVQt0oQMKAEEVjP8A4qf1s73r8o78VP62b70+UOV9fH9D6YIoJ6owa/CKoa4KDOJJIHuiPY2MCPY9LJxBFdEmcO4GnvEBBhT+um9+58o78Xb9dO0pqnyhyevj9EMafys3tmzDUHtiCI5SFK1d3rpeRu91AIkEaYskuS66FhBCwZcBHRwjoDoUQkdAOiWWcoiixhzke8eAiCog3U9SX4CFhEO6nqS/AQoMUdCUhYSA4iOMIYUwCR0dHQHQohKx1YBY4HPuKmh45g/ZHAEmgzLFQANSxNAItTMMiNY8xg4tDFEDIjHgTWp1FaaQFqRPDpiXslAylV5Q6ENbUnXLOGSj06T6S0vly5FtiBSWqakcqiG4eYktcVLeYA0wdGrBCwNK55cM4gw01BKxCuwBxEtVRSparCp4DtpEUxsM4ayxrrb7TTq866UiNkKMQ4KsNVYWkLwgmMZK6MJeu9IlymZ5RmqrAk0IIzBqRly7oo4qbcUq4exAgZUGHAodAMiQMtRCIhhIUmEjQWscISsdECx0dWOrALCR0dALHQkKIB0SJpEQMSCGCGX1U/dy+PYIUwiHdX1JfgIr47HScMqtiJiSldmRWmEqGYCpGQ1pAWDCQLPlFgvpcn6x+UJ/mPBfS5P1z8oArCkQJPlHgvpcn6x+UcPKLBfS5P1j8ooKGOEC/wDMOC+lSveflHDygwX0qV9Y/KAK1hKwL/zBg/pMv4/KOHlBg/pMvLv+UAYwswJMludEdWbzt0HOLmNwzHEk2u6Yh71aSt1ymmhoRlrnGdG38H9Il69vyhyeUOGUUXFKoOdqu6j4CIrStguhefQXLLSVazSRinNeKrprkaxMmFC4iYBLBR8MzhWlhxfloNBnXIRlF29hQajEoCRmysyk95pUwg27hfpCZCgAZlovIZRE1qJbMUwr9Gl052R2/FxnLrkKcMq+6JHlLLr0ct2IxE0TURVY213QQQaKRShFIyh27hfpCeadWybsyhv+O4T6RLz161T8IYaKT8mcKLQHa1brrVrpXjDawN/x3CfSJeXCh6vuhp29hB/7iX7j8ooKVjhAv/MGE+kS/c3yjv8AMOD+kp9VvlAFTHGBB8pMF9Jl/Vb5Rx8pcF9Kl5/st8oAvCiA48psD9Kl+xX+UJ/mjA/S5f1X+UAaEdAUeVWz/pcvL9l/lD5flNgXZEXFIWmMqKoR95iaAaczAGIkQZQwD4aiHiAgXqp6kvwEZP8ACL+i4f8AjGFK/sGNanVX1JfgIyX4Rf0XD/xrD/sMB5+TCgnn7amEI+ELp984jRQx+9YdU/cxGPvnEiUrnpTWsA5XPA8Ydd2xbw0iWwF/SJXz0pMHuP2RcGw2fOQ6TguVstrHXvU5+6AFrMPu7YcG+4MXJeyJpvFrEy0Z3W20oo4kGKLAqSOXKAnRu/3xIHP3MVlOffwixLlFhAKH79OESqGPPvMSyZQH9osy2FKUzYW1Iuiop2Mf7x3RPTv7YJCYQBQDd/ZhyYgg5quWhK5QAd0YcIhc5wdmTVatVGZrlFXEYdSMuHIZwUIZz7u2Iie3jwiziMORmOHZpFeWtWA7eEBZw2y505bkR2UecpFLuVYtyPJ+azUYUqrGrGwd1Y1WAwwky0QEmgVswFoxzNOUJiccqai40Y0Dad8E1nG8l5lcnVqhSbXtN3tgBjcLMkuUcFWGdCfN749AwuKDJecqKxBBtDqM61gXt/C9PLUgC5UvR1OdvEEcRpnwgkrFFjzixs0n8Zw+v6Vhjr5t4iJ5BVbm0YtafTpxHZE2CBXE4ev0jCEZ3bt4gr2t9T6zeMTYfQ948BED6t6zeMOljKCI16q+pL8BGR/CN+iyP4z/APDRrU6q+pL8BGT/AAij/SSP41f/AAaA8+pHDP5RwHxi/svCia9HcIiC53auS9g4ngBEaS7N2NMxByFAfOpkO2vKCM/yWmKKrRqalWDRq8GyKiBAVS1SqNqO/tiZn0p3CKyxkvCzsKgciqzGZCjreDQZ15RPJ2lLmMv5NUeqgXVqG7CM41jywylXFVcUKsMjAWdshlN0vUGoKgVEAmL2uUNjqHDIqvRiu7yDa++As/BS5xLYeZcxz6CaRLcdx0Pszi2+znB3pZzNTQHPnHNshQDVmUqGCo6ZibSoqeA7YKEysMQSGqCmqstpDcQQYuImdFHbSJpMmYzrLmBqnJXbUL38RGhkYVJTLaoyCgTG3iW+yAzYw7a0O8KxZw+GZqUFc20EaVipFDQ0yoafcRGxoNzgdBwggV+IPy04ftQ2ZhHp1TkMwIJB3HWHWPDQLCy5prmONKkWgwAFpZGVONc4iYRosQJdCXGQtqyi8ip7NIoTsGlGKNotRQi3sFe2AEOAQe3WG4DCVnA0yS52u0CjUxI6UP8AS2HSZjISVNGIYXVt7T4QUbxeMCAkHq2tmQwZQOA14wNw8p8RVmqKnrXdtffSAWL2iWcdWhFGIBrkcqE8YI7M2vMQU6PcDqpNDUVNK1hoLrstwAEcUVbGuGq8iO2BEvGGU4RqlwWRDdkM8wR4DSLmJ2liJU10daIkxbTLAY9FzAORrXjAbb026begYGYtzXKMmGQOXPUwBDEbLOJ32vqwUABgoXu4QIm4E4fFYcHz8RhmA4ijjX4wQ2ft7oZLC24kfkwxyTLU84Tb71x2EOVWTZrMQLasXBMB6g/Wb1j4xJLOURzOs3rv4mJJZygiFeqvqS/ARlPwifokj+NU/wDVY0apOqvqS/ARlfwifocn+NX/AMGgPPAOXLKDCKZEsB0KvOZZm8wYlaZZDhxgOhz8BBF2LpLu1S1bju1XhEaaPZVWltmS1aXE3UyyglgkmId83Beqa9tYz+zsRMlBwZbMqFWd1Nti93GNImKUBK1HSKpWqnOKytvMAFfcANYDY/b6SppSlwUKHYbpDHM5ceEWdpzT0dU13TUaha/cRh9qTg8+a66GYxU8AoyygsjZytriYCUqaKrUpaS3LOGY93DK+rqFualwt5EQD2biVSU6lQXdpbK/FFA59sSPjmoM7gxzVt4/OAuY/aZYIipYZjMGYNkdBlyGsFMI7uq7w3VVWBU/CAGNw9ySpmlsy1lHBTnWL2zcWyVuSqpmzKTVV5nhAGxJJG85bvF0RTFsKU0c256hon6TJSorfbT1TDMQlxl3aJMuNNdDBFbE4oJbzc9UejTMxR2vtPo1UJrMRiprlwHtghNw6vS7zeI17oA7ZwpadJAFEpYKbwCg1JHI0gLmG2e7JczkPMCuVJLEtwJMXG2eztdW0ualeAyp/Xviph9qm+0ILVa2iks2tATXL2QXebaaU1WtxrTu0gM46TGeYHArKW5lUaKDT21iFBvbwyHCucGldlxM8KlxmJLZajIjWleWRhuHwaO53Gl2irKxvury5QGIxUux2/ZegJ3u0QXwQyD1q1VcXLkGy1A1EJ5UuDNogASWWUKoChVyr3k8zFbZc1hSoqEzWtc1qcu2kRrpuXw8ubQugYgZMQVpX7IzPlaAjBECqsxJb0VcworQV5VzjT4V7kBAIBAbe4Rl/K+hdSpDDo5YJVrqNU5RUjPgjo3pnu7tT1e3t7oKbYe7GYQ8Oj2X4iBgYKG4XK1a71eyLu0DXFYU8peyxX2iItevP1m9dvGJ8OMj3jwEQTOs3rv4mHyzlFZQp1V9SX4CMt+EQf6OV2Y2WPejRqgN1PUl6dwjLfhCFcHK/jZeQOu42UB50g+JpVjkIuzVsKAnRFOQy10HPvimVOlNcgIelWbjkOJuiNNMuIZ5SrSu+oNurLlGlRBQZdW0AERldiAX2zARYLkNl9fhBzaGKMmSzL1mZJcuo1Y/0z9kVk7G4lVVmbdRFmG7rVYAgUHHOkY/ZuzmnPvbqSwrTGbdAXj/AEjQY/FGZhUlrLJM8KyN6LVII7+FPbDZrsjS8OxumzLekcKKvMIyUnQ0GQgsBpLC57CVVmawHe3YWSpLqD5zUqIXHuSxFLejZlCgW2sDnXtqIbs3Oavre6ItaB8PelBqLbQTq0V0bcNRvIaEdWrA0giUKIXagCWsATmf6mM1g8UTMaWRWrtQAljrWnbrFRssI1Zcs/sLqLfGG4magdELAOysyqxtuzplHSWVUBqd1agsM7R3xjfKDGM899RaJYVerRacII2Aipj0NFmA5ySzH1aU+2AmxtvMCJc3fXqhz1k5V5j4wS23jxLlUXrTRu3DSXrUjmYBkmZc6NS5g6mhIUntjQDPP4CMlswq81TXQqyjvjVKANOPDrb0BzmlT6VvC3QHj3RA8lZtGDEW3C5GtJ40r7ozm19ouuJfM9GXsZUbSgoSBz49sT4bapwwCEXpiFrLnLuhqZcdDoCDmO6BirtrBh5m6LKLne95dyNaxU2WLSyNqmeudtc/ia+2O2rji7HPM2mtdF5CK+z5h6RCT1nmIa9oqPiIjXTTttG2TYM3IpXqgLwjN7XFABqSWdzwupkPcYLOobL0VrSKeI6N0dSwB3ygpdvCuRPDhF6QDkk3qaVJbJVFoPzjSrPw855IeUt8p5CmcjFTkchlrmICSSqI3pEUdwc0Xgqn0m58BFrZUsGahbdD9BQKMg1woPZEWvW26x9ZvGHyzlDHO83azH4xYw+h7x4CKyqodxPUl+AgZt50WUjTApCT5ZAZbt6hr7aEwSTqp2JL8BGf8tQ34pLCZk4qVQEha0VuJgM/5UYpFARaFQyvuqN2ZTIVHAjP2RnMClzoEzZiQigXXZaQjzSwoc7rWqd43DieWpiOS5RgVNCjKyNW3eB1iNPQMGF6NHXzlVWPVowyIPaM4AbX2iJ05Ja/m5L0up120J7uAitO2k801Q2iZnMCi0M3z7oouC516itYwPnZZeMExstjTRZTg0yq5cuPfE2J2dLc9INx1ZZlwqwLg1FR7OEZXBY5AgBaZLa5XUisxG0yI1FM+cHcHjGn36FFLIt1bVUZkkjXPQDM9gijP4tCZzin+5MAAbIMSTSsF9iYSXLYTHmLVmoi0NB2kkaxndssTOapJqFNW3ScqZAZcKR2AnlnRXJsDrcK5HgDAG/KHaV5ZEO6qraAdWrmfbATZcyzEIzVFjqzZ6LXOnshzqpehruiWXqdGANfD4wuImLdJ6IDL8mzEBQWBqDXnQ0J7BBW8xKXru51N2XFTpGd8o9liwTF60vrrXzafODuzcQHkIR/tjo2qeWnwMUNqYqriWTYhMsAh+jLsdSTwC8qZwZBPJ5JcsTJk0VeUqtLuGWda0HE5a8BWK2OmmY7s5qznMg3C3hSC+0pKItVVEWUtzdEhe5ic89DloRQDlAedLL/AJRi+S5tMQSxMUaUIPKnDhBpc2NhS9vNLasDaSoOsa5nWWpam7LFcuNOEUNiyE6JHWoLBgfO46RaxMqo3uqM7Qcz3wZYbE4i52u852bvYnjBXCyFdGAO5MCllZbldgMiAM7uRGndAzH2WVVLSs90YhiwmLUnMcKaZRNs3bMySoTNkrcFrrXmRQkdkFT4zYBCdJKLstrMyvS8KDTMUpXuOkA0coTzQq4I4sDWNOdsTJmfBh0dlvR0UmhAHP7IA7Rk2m8cWZCV3gWA1B7REWC5xICM+XUuXtyyHxgIl0wmptReu/31MNWcTLVGO6rM13G0aD31HsiJphYACgXgoNoHb3xQ7EzA5CoNyWLUXiWPE8yYt4fECW6S6lvykhWVQLVYMKgHmDFIWrQ1qwtIodOUJJWkyX2zZFDz3xAe4ON5vWbxifDnI948BED9dvWfxMTYfQ948BBlWQbq+pL8BGa8vjTADTPFSNRdRgGIpGlUbqepL8BGa8vVrgk7MbI07mgPPXQqtSD+VFUJFty1zI5wxEBoWdUDGgZgW9uQ7YVpjPYGZiJa2Lc11ik1oOQ7ItYeUXlOV60pqkZZoRX7DEaOtK5DguQr5vMHiDrD8PJNPYxFTrzitJxRVbCFZSbgrC21jrQjMd2YMHZVtgoE3mYhmbfVqEUAGo05e2ABuSjSyvWlszDK4XVqMjrmI0OxSWRgKatW4lEXOpJAzoTwGZoBkKmM9tB75zlAAiu1ijRVg75LOd8EOay1CMi3lF4mmunGKUF20az2O/vBaNMAUvQUrQZAcAOFO+IcKNxzxR5dCPRzrFjbiBcQ1puDCpN159piHDAiU5HEqpiBgerMW0ZlrmVuavwqBrFraMpQHKAhFnKUVmvKKQRQnjmBFGSta6VVJjCo84RZMysubWhKCWwqNaONffAGvJzFGrS60ExGIJNtGGde+hMB9pY0tiHZeqj7q81GVTE5mLh54s6kuZcoJz6N0rTuzp7BAhe/hnU6tF0ETtWYzVeYxG8lvSHJeGXECLEwlUWoFWDAspvvU8a6U7oEAe8dl29E8nFECxjuA1UHeKMfsgNt5Ot+RIr+bb/tI+cEcRp8aQF8mHqGHNFNvcf6wanafCDLz/GdU/vZhy4VMPwGHJZDxqqhiMlY6GvICpPdEPXcrwV2Zm/ZrBzDIqrWmSIwHM0OZ72Ip3CDQRicYGJRRaJeIYIQM1UAAk9ppU9piWWodGHNrlqernQjlStCPbA3FZTX7JrNlpma0ibDOQoP/OlLThrU+yA6Ylq2kUe5ZdGNttOXfn7YWThlalqg1Vt5mFBmRn20i3icML0lmo6RbmytpU0FBwIMVJTGWQGqpFwuQ+cDQnlEBgbCDLkJbbtx6OYFOnjrlAvFYRZTyrSd7ESqqxupvAxb/wAUmohS1H3r7rcrudBlzzinOcuUd+us+QtALd24aCKPZJg3m9dvGHyxlDJnXb138YkljKDKuBur6kvwEZ3y5H+jTsxmHHvDCNEnVT93Ly9gjO+XIrgdK0xWHJAOi0aA83SUxO6rGjZWqWi3gprIzgD84qqy0GTA1z9lR7Ymw2IsNGzG611cwtc+80iDaRliaThyLEC2tnW7251iNITLoa1B5LTMVPwgrhEZ6qCtZS3de7sy4mkB1mMDVWAJ1uFsKs0hqhyM2JtOd3zgNbgNlSsO6tOKTHmFrAwsVGOYqDmSeZ0PbEOJnrLmNeGLOWMwUGHYMTkRTVTSgociNc4BnaswlDc56N1YF36QXdg+cdidovNYMxLOEZCTRaLqAOQEBX2hNDvuraAtKXXE551MIpPRW50LsxAPm01iuxuPabQc7jEwcAUKmhFNLYCE6dx470Sq1Fmj0pbLX2g1+ERVziRFuWYR5km7vzA+2Akx7kvU/q5FfqikVwNfCLG0fzrdiSgOVtoisRx9hgOBz7xSOYU7uHs/vHEZ/GFPUX15g+AMBofJLEkTbK5MrBfdpGvmCi92cYryTH+qT9kM5HA5H5xssQpIW1rQr1YW3XrTTsisvP1FuIccL5lTTzQTn9+JgzicUqqgHoI7iuVoWgA7jrAvaEu2fOPB5ipl6JNT4RenDfe4ecymg0oAaj2waA8S9zE+ka1584kwjb0sHzHZzU8hlEU8bxpwzqDDEel2u+rKIA2gaeZ05dJCSFQtvXMCCfAmCuLws3FIAmHRJbnpAUA324EnIjjlGewGMsR5ZqA0uYQV0La5xsdh4xThkuIHRlla4265wSs1MwszBPRkVqi8S2rMHYcvnEM6+e6TH3vyktEIUIMiDQAUyFYNba2ijTBZviWjI2RS6pzAgM2JaYylUcvLmqaIomIsskE1Goz41gPXH6zdrtp3xJL0iN+s3rNT3xYw65HvHHsEEU0G6vqS/ARm/L4/6AEcMbhiCBcRrGkXqr6kvwEZry+/4f8A/Mwn2wI88V/YSc2UXA9pHPuh5IppWooGU3RAD96Q9HHEkftKbjEbL0YPVJqTnu3RewGxJs8EpQKhVSzboDcoq30zOdjKpUtaV7q6wXwu15kiWstUUbzNcxNRU5kjSv2QRR2jsh8MRfZv5Ble66BoNP8AtgltTFdI5N7TKClzbtzcaDgK6QOddM/OoQOHL7fdBSIcxyNxp1osTFBWoZctVtK17jpXsisPtiZCCACGamShWCm7lmDBEP8AbPdizg5YYTKnIrLQ+1h9gMQIAGF2ispJIu3eOXGJJJNj83eUob9okj5wEm0AC+7okqXlW46VzivLFSRTr5D1uETzJqlphNd9GRAB1dAK+wH3xDh+sPdTOAa4INCKFbgysLSGHCFI3K/8xh8In2kPyrmnXtbNr92gGvHSIK7lP+Ypr+1QiA0XkdK35j06iqgJ7TmfdGtcVHdnADyXw4WTdTemMxyOiwfQd/tN0VmsZt+Va8yg6oWaKcaUHhCCZVph9J2IPsgt5SSKLeBkUZGy80j+0Z2XMqG5sF+tSh8INRSxA3jTzjnnEVPDPsifEgCnM/CI5csnh1YgsYbD3AsUJQKwLZsLu0DPs5Q//EiiMiIlC6vc6F2VgKEDsP2Qs6aiSwJZJaYPyhtC07AdaQOJighhMdLRHEyW0x2NZbLN6EI1a1yzPdEUzaExwiXUlrMVhLTcDMWBJNNT2msVIVDmvY8vxEB7pMO83a7ad8TYcZHvHgIgc7zes0SSzl7TBlAo3V9SXp3CM35fD/0/uxmE8TGkXqr6kvwEZvy9/wCHnsxWENT3mA82By9lBQa98OdVuIUkoTusy2EqeY4Qij4f9MLT4HiYja01KqVepZFMxigUKwyoKa5cdYmdZfRqS5Ll2DIVyEoDIg11JypwpFJNR2Mpi7T29b9msBVCAnIGhuoFGdvCInWjDtyI5wWkEej3V/rFfE4es1RpeyrcNFqQAYIpslJaGlCzTN/i2lPZEINpqDpxrbBZsCoe1kA6N2RkZyl9DQkRSx4HSNw6t5Y33NTM+3s5QHPhwUDKaZKlpPXY60A0AhskkI/7xND51D84bKc5DhdWg9LSgjUbP2DeqvMqiPvFBusaDIk8NYDLTJLBb7T0d1gfhdTTthks0YV56HjG229ssPIVZYC9GVIUC0FgP7xinUqaZ7p043CKLOPSqo4PCxwFK200J74qL1aftr9ahgw8rpMKWW9ujF43wqoo1qOJgT0ZVFem7MZghBFbhrlw1gNNsvbshERGExLFVc1DAt7M4NYfbEhzRXoTkLx0YPYCY87P37YlQC6gYjLdNtwLcj8YDf7ZeWslukYAaDMMT3CMdNKoc9KUtUWm6vfBPZGATEyWBcq4FwNodbTUUNc8iOHOK2N2LOLhFStsuXcw0ZgKE141oDBAZ3vfIUqbQAIMSNlHo+k3RYVuve33CufdEeA2awmFXFrIGJBGdo19ndF/H7RCyTLACot3VoxmNyA4DmYgB4972Zi9ermaJe2lQAAKClIpj+8PdyxqdTy0HYOyG0iq4H7nhCqM17GXxEcB9zCgaesviID3KZ1j6xibD6HvHgIhbrHvaJ8Poe8eAgypod1P3cvwEZ7y5H/p7fxWEPxMagdRf3cvwEZ3y4/4e38ThPEwHmyJ4cIcZfLnrTWLCQ/5mI0pWZivPXqxYDezLIRPiPzaetM8REC6/VgtPkvveFDrEmPytYa0qD6LDOGYfrLE2P1XvglW8fNE0uQKPW8qxKB2IBJB4HPSAWLV6hnFLhSpW2tBGqkcPUXwEUvKbqS/WbwEUZ7DPYwbXo963nGu2ft5HAVq3DUkippz598ZWXpM/ct4iEw/XHe0IlbfHbSRUOfCpJOQ7O+MNiZl7u3pMzADh2QU2l+a9qwHP2wIJbIw5mmwFh0lygL6VOPZA+cpU2N/tllAIC0aucFdg9dfX+yKGP8Azz+vM8TBVQQ5FJYBdSy2+tCD7IubN/Oyv3qwGu2AiSkKDrjedvS7PHKDFPblADZureu3iY0Q+yKyzflFjkRgiZTJZZjNXdImEZDt5kaZxlpzlqE8FVVUcF+9YJeUX5+b+8+cC109ixFiMIT7NSohwX48IJYLqT/3S+MVJnHviKr2fE+6FI09ZaD2xM32wia+1fGA9ofrHviWXpCtqe/7BFnC6H1vsEVl/9k="
      alt="Album cover"
      class="table-cover-picture mr-2"
    />
    <span>Procession - Remastered 2011</span>
  </td>
  <td>450,557,002</td>
  <td>5:45</td>
  <td>
    <div
      class="popup"
      onclick="addSongToLikedAlbum()"
      onclick="heartFilledFunction()"
    >
      <i class="bi bi-heart heart-table">
        <i class="bi bi-suit-heart-fill heart-filled"></i>
        <span class="popuptext myPopup">
          Added to your Liked Songs
        </span>
      </i>
    </div>
  </td>
</tr>
`
newTr2.innerHTML = `
<tr>
<th scope="row">6</th>
<td>
  <img
    src="https://static.fnac-static.com/multimedia/Images/FR/NR/36/61/c0/12607798/1540-1/tsp20200820140224/Live-Album.jpg"
    alt="Album cover"
    class="table-cover-picture mr-2"
  />
  <span>Nightvision - Remastered 2011</span>
</td>
<td>101,292,002</td>
<td>3:45</td>
<td>
  <div
    class="popup"
    onclick="addSongToLikedAlbum()"
    onclick="heartFilledFunction()"
  >
    <i class="bi bi-heart heart-table">
      <i class="bi bi-suit-heart-fill heart-filled"></i>
      <span class="popuptext myPopup">
        Added to your Liked Songs
      </span>
    </i>
  </div>
</td>
</tr>
` 
newTr3.innerHTML = `
<tr>
<th scope="row">7</th>
<td>
  <img
   src="https://upload.wikimedia.org/wikipedia/pt/9/96/Queen_I.jpg"
    alt="Album cover"
    class="table-cover-picture mr-2"
  />
  <span>Rimsky Korsakov - Remastered 2011</span>
</td>
<td>503,112,002</td>
<td>1:45</td>
<td>
  <div
    class="popup"
    onclick="addSongToLikedAlbum()"
    onclick="heartFilledFunction()"
  >
    <i class="bi bi-heart heart-table">
      <i class="bi bi-suit-heart-fill heart-filled"></i>
      <span class="popuptext myPopup">
        Added to your Liked Songs
      </span>
    </i>
  </div>
</td>
</tr>
` 
newTr4.innerHTML = `
<tr>
<th scope="row">8</th>
<td>
  <img
    src="https://upload.wikimedia.org/wikipedia/pt/a/a2/Greatest_Hits_Queen.jpg"
    alt="Album cover"
    class="table-cover-picture mr-2"
  />
  <span>Recloose - Remastered 2011</span>
</td>
<td>10,999,002</td>
<td>5:45</td>
<td>
  <div
    class="popup"
    onclick="addSongToLikedAlbum()"
    onclick="heartFilledFunction()"
  >
    <i class="bi bi-heart heart-table">
      <i class="bi bi-suit-heart-fill heart-filled"></i>
      <span class="popuptext myPopup">
        Added to your Liked Songs
      </span>
    </i>
  </div>
</td>
</tr>
` 
newTr5.innerHTML = `
<tr>
<th scope="row">9</th>
<td>
  <img
    src="https://static.fnac-static.com/multimedia/Images/PT/NR/7a/9d/48/4758906/1540-1.jpg"
    alt="Album cover"
    class="table-cover-picture mr-2"
  />
  <span>The Black Heart Procession - Remastered 2011</span>
</td>
<td>10,172,002</td>
<td>2:35</td>
<td>
  <div
    class="popup"
    onclick="addSongToLikedAlbum()"
    onclick="heartFilledFunction()"
  >
    <i class="bi bi-heart heart-table">
      <i class="bi bi-suit-heart-fill heart-filled"></i>
      <span class="popuptext myPopup">
        Added to your Liked Songs
      </span>
    </i>
  </div>
</td>
</tr>
` 
console.log(event.target)
}


/* THIS IS THE SMALL HEART FUNCTIONALITY AS WELL AS THE POPUP TEXT */
function addSongToLikedAlbum() {
    let popup = document.querySelectorAll(".myPopup");
    let halfHearts = document.querySelectorAll(".heart-table")
    
    for (let i = 0; i < popup.length; i++) { 
        if (halfHearts[i].classList.value.length < 40) { 
        popup[i].classList.add("show");
    }
    setTimeout(removeClassFromSong, 1500);      
}}


let removeClassFromSong = () => { 
    let popup = document.querySelectorAll(".myPopup");
    for (let k = 0; k < popup.length; k++) {
        popup[k].classList.remove("show")
    }
}

    let heartFilledFunction = (event) => { 
    console.log(event.target)
    event.target.classList.toggle("heart-full-showing")
}

let removeHalfHearts = () => {
    let halfHearts = document.querySelectorAll(".heart-table")
    for (let i = 0; i < halfHearts.length; i++) {
        halfHearts[i].classList.add("heart-table-hidden")
    }
}
/* END OF THE THE SMALL HEART FUNCTIONALITY AS WELL AS THE POPUP TEXT */



    /* THIS IS THE PLAY - PAUSE BUTTON SWITCH FUNCTIONALITY */ 
    let showPauseButton = () => {
        let playButton = document.querySelector(".big-play-button");
        let pauseButton = document.querySelector(".pause-button");
        let playButtonId = document.getElementById("play-pause-button-id")

      
        if (playButtonId.classList.value === "bi bi-play-circle-fill big-play-button") {
            playButtonId.classList.value = "bi bi-pause-circle-fill pause-button"
        } else if (playButtonId.classList.value === "bi bi-pause-circle-fill pause-button heart-full-showing") {
            playButtonId.classList.value = "bi bi-play-circle-fill big-play-button heart-full-showing"
        } else if (playButtonId.classList.value === "bi bi-play-circle-fill big-play-button heart-full-showing") {
                playButtonId.classList.value = "bi bi-pause-circle-fill pause-button heart-full-showing"
        }
        
        
        /* else if (playButtonId.classList.value === "bi bi-play-circle-fill big-play-button heart-full-showing") {
            playButtonId.classList.value = "bi bi-pause-circle-fill pause-button heart-full-showing"
        }
 */

  }


  let redirectToAlbumPage = (event) => {
    location.href = "albumpage.html";
    console.log(event);
  }

                
