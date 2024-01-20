
  import { render } from '@testing-library/vue' import Tree from '../src/tree'
  describe('tree test', () => { 
    test('tree init render', async () => { 
      const { const { getByRole }= render(Tree) 
      getByRole('tree')
    }) 
  }) 
  