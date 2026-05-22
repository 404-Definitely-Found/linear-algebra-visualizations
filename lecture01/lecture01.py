import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(-5,5)
y1 = 2*x
plt.plot(x,y1, color='orange', linewidth=2, linestyle='--',label='2x-y=0')

y2 = (x+3)/2
plt.plot(x,y2, color='#3a86ff', linewidth=1.5, label='-x+2y = 3')

plt.legend()

plt.plot(1,2, 'bo' ,markersize = 4)

plt.xlabel('x')
plt.ylabel('y')
plt.title('Graph-1')
plt.grid(True)
plt.show()