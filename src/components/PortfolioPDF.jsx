// components/PortfolioPDF.jsx

import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { getRandomTheme } from '../lib/themes';

const PortfolioPDF = ({ fullName, bio, projects, skills }) => {
  const theme = getRandomTheme();

  const styles = StyleSheet.create({
    page: {
      backgroundColor: theme.bg,
      color: theme.text,
      padding: 40,
      fontFamily: 'Helvetica',
    },
    heading: {
      fontSize: 28,
      fontWeight: 'bold',
      color: theme.primary,
      borderBottom: `2px solid ${theme.primary}`,
      marginBottom: 10,
      paddingBottom: 5,
    },
    section: {
      marginTop: 20,
    },
    sectionHeading: {
      fontSize: 20,
      fontWeight: 'bold',
      color: theme.accent,
      marginBottom: 8,
      borderBottom: `1px solid ${theme.accent}`,
      paddingBottom: 3,
    },
    text: {
      fontSize: 12,
      lineHeight: 1.6,
      marginBottom: 6,
      color: theme.text,
    },
    bulletPoint: {
      flexDirection: 'row',
      marginBottom: 6,
    },
    bullet: {
      width: 10,
      fontSize: 12,
      color: theme.accent,
    },
    bulletText: {
      fontSize: 12,
      lineHeight: 1.4,
      flex: 1,
      color: theme.text,
    },
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.heading}>{fullName}</Text>
        <Text style={styles.text}>{bio}</Text>

        <View style={styles.section}>
          <Text style={styles.sectionHeading}>Projects</Text>
          {projects.map((project, index) => (
            <View key={index} style={styles.bulletPoint}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>
                <Text style={{ fontWeight: 'bold' }}>{project.title}</Text>: {project.description}
              </Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeading}>Skills</Text>
          <Text style={styles.text}>{skills.join(', ')}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default PortfolioPDF;
