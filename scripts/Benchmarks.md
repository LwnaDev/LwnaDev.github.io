![captura](https://camo.githubusercontent.com/e9e90d912b2ce39330512213fa0bd19e02c90c9e6781523f99661511856eda2a/68747470733a2f2f692e6962622e636f2f366e515643366b2f42656e63686d61726b2d53637265656e2e706e67)

# Installation
* The complete guide can be found at [GitHub](https://github.com/LwnaDev/Benchmarks)

# Benchmarks
Pequeño programa escrito en Java donde probaremos diversos arreglos.

# Tipos de arreglo
- Quicksort
- Shellsort
- Bubble
- Insercion
- Selección 

### Code Example

```java
    //Inicio del metodo quicksort
    static void QuickSort(int[] b, int izq, int der) {
        int i, j, v, aux;
        i = izq;
        j = der;
        v = b[(izq + der) / 2];

        do {
            while ((b[i] < v) && (j <= der))
                i++;
            while ((v < b[j]) && (j > izq))
                j--;
            if (i <= j) {
                aux = b[i];
                b[i] = b[j];
                b[j] = aux;
                i++;
                j--;
            }
        } while (i <= j);
        if (izq < j)
            QuickSort(b, izq, j);
        if (i < der)
            QuickSort(b, i, der);
    }
```