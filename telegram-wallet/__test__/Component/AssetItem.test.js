import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import AssetItem from '../../components/AssetItem';

describe('AssetItem', () => {
  it('renders asset correctly', () => {
    const asset = { name: 'Bitcoin', balance: '0.5 BTC' };
    const { getByText } = render(<AssetItem asset={asset} />);
    
    expect(getByText('Bitcoin: 0.5 BTC')).toBeTruthy();
  });

  it('handles send button press', () => {
    const asset = { name: 'Bitcoin', balance: '0.5 BTC' };
    const handleSend = jest.fn();
    const { getByText } = render(<AssetItem asset={asset} onSend={handleSend} />);
    
    fireEvent.press(getByText('Send'));
    expect(handleSend).toHaveBeenCalledWith(asset);
  });
});
