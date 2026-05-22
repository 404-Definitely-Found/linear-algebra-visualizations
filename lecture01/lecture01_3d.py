import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(-2,4,20)
y = np.linspace(-2,4,20)

X,Y = np.meshgrid(x,y)

Z1 = 3 - X - Y

fig = plt.figure()
ax = fig.add_subplot(111, projection='3d')
ax.plot_surface(X, Y, Z1, alpha=0.5, color='red')


Z2= 4 - 2*X - Y
ax.plot_surface(X, Y, Z2, alpha=0.5, color='blue')

Z3= 4 - X - 2*Y
ax.plot_surface(X, Y, Z3, alpha=0.5, color='green')

ax.scatter(1, 1, 1, color='black', s=100, zorder=5)

plt.show()
