import numpy as np
import matplotlib.pyplot as plt

v1 = np.array([2,-1])
v2 = np.array([-1,2])
b = np.array([0,3])

plt.quiver(0,0,v1[0],v1[1],color='red', angles='xy', scale_units='xy', scale = 1)
plt.quiver(v1[0],v1[1],(2*v2[0]),(2*v2[1]), angles='xy', color = 'magenta' ,scale_units='xy', scale = 1)
plt.quiver(0,0,0,3, angles='xy', scale_units='xy', scale = 1)
plt.xlabel('x')
plt.ylabel('y')
plt.title('Vector Graph')
plt.grid(True)
plt.axis('equal')
plt.xlim(-5, 5)
plt.ylim(-5, 5)
plt.show()