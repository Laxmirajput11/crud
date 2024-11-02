import React, {useState, useCallback} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';

const initialRecords = [
  {
    id: 1,
    views: 7500,
    name: 'Avengers: Endgame',
    date: '2024-06-01',
    income: 3000,
    expense: 2000,
  },
  {
    id: 2,
    views: 54000,
    name: 'FIFA World Cup Final',
    date: '2024-07-13',
    income: 25000,
    expense: 10000,
  },
  {
    id: 3,
    views: 32000,
    name: 'Game of Thrones',
    date: '2024-08-22',
    income: 15000,
    expense: 8000,
  },
  {
    id: 4,
    views: 15000,
    name: 'Formula 1 Race',
    date: '2024-05-08',
    income: 6000,
    expense: 5000,
  },
  {
    id: 5,
    views: 47000,
    name: 'Oscars 2024',
    date: '2024-03-27',
    income: 22000,
    expense: 15000,
  },
];

const App = () => {
  const [records, setRecords] = useState(initialRecords);
  const [visibleRecords, setVisibleRecords] = useState(initialRecords);
  const [nextId, setNextId] = useState(records.length + 1);

  const showAll = useCallback(() => {
    setVisibleRecords([...records]);
  }, [records]);

  const showHighViews = useCallback(() => {
    const highViewRecords = records.filter(record => record.views > 20000);
    setVisibleRecords(highViewRecords);
  }, [records]);

  const showMaxViews = useCallback(() => {
    const maxViewRecord = records.reduce(
      (max, record) => (record.views > max.views ? record : max),
      records[0],
    );
    setVisibleRecords([maxViewRecord]);
  }, [records]);

  const showLoss = useCallback(() => {
    const lossRecords = records.filter(
      record => record.expense > record.income,
    );
    setVisibleRecords(lossRecords);
  }, [records]);

  const addRecord = useCallback(() => {
    const newRecord = {
      id: nextId,
      views: Math.floor(Math.random() * 50000),
      name: `New Event ${nextId}`,
      date: '2024-09-20',
      income: Math.floor(Math.random() * 20000),
      expense: Math.floor(Math.random() * 15000),
    };
    const updatedRecords = [...records, newRecord];
    setRecords(updatedRecords);
    setVisibleRecords(updatedRecords);
    setNextId(nextId + 1);
  }, [records, nextId]);

  const deleteThird = useCallback(() => {
    const updatedRecords = records.filter((_, index) => index !== 2);
    setRecords(updatedRecords);
    setVisibleRecords(updatedRecords);
  }, [records]);

  const updateExpenses = useCallback(() => {
    const updatedRecords = records.map(record => ({
      ...record,
      expense: record.expense * 1.15,
    }));
    setRecords(updatedRecords);
    setVisibleRecords(updatedRecords);
  }, [records]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Event Records</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={showAll}>
          <Text style={styles.buttonText}>Show All Records</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={showHighViews}>
          <Text style={styles.buttonText}>Show High View Records</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={showMaxViews}>
          <Text style={styles.buttonText}>Show Max Views Record</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={showLoss}>
          <Text style={styles.buttonText}>Show Loss Records</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={addRecord}>
          <Text style={styles.buttonText}>Add New Record</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={deleteThird}>
          <Text style={styles.buttonText}>Delete 3rd Record</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={updateExpenses}>
          <Text style={styles.buttonText}>Update Expenses by 15%</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={visibleRecords}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.name}</Text>
            <Text>Views: {item.views}</Text>
            <Text>Date: {item.date}</Text>
            <Text>Income: {item.income}</Text>
            <Text>Expense: {item.expense.toFixed(2)}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'black',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 22,
    textAlign: 'center',
    color: '#FFF',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#87CEEB',
    padding: 12,
    margin: 5,
    borderRadius: 5,
    width: '30%',
  },
  buttonText: {
    color: '#333',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#FFF',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#333',
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
});

export default App;
