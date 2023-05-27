/**
 * Khối 1: Số nguyên dương > 0, < 100 
 * 
 * Khối 2:
 * While
 *  count = 0
 * 
 *  while(count < 100) 
 *          if(count % 2 == 0) => Chẵn soChan += count
 *          else => Lẻ soLe += count
 * 
 * Khối 3: In ra kết quả dãy số chẵn, lẻ
 * soChan
 * soLe
 * 
 */

function inSoChanLe() {
    var num = 100;
    var count = 0;
    var soChan = '';
    var soLe = '';

    // while (count < num) {
    //     if (count % 2 == 0) {
    //         // Số chẵn
    //         soChan += count + ' ,';
    //     } else {
    //         // Số ler
    //         soLe += count + ' ,';
    //     }

    //     count++;
    // }

    for (var i = 0; i < num; i++) {
        if (i % 2 == 0) {
            // Số chẵn
            soChan += i + ' ,';
        } else {
            // Số ler
            soLe += i + ' ,';
        }
    }

    console.log(soChan);
    console.log(soLe);
}

inSoChanLe();