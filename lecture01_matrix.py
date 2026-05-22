import numpy as np

A = np.array([[2,-1],
              [-1,2]])
b = np.array([0,3])


ans = np.linalg.solve(A,b)

print(ans)