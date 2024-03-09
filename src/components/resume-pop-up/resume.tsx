import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Font,
} from '@react-pdf/renderer';
import { Profile } from '../../interfaces/profile';
import { SanitizedConfig } from '../../interfaces/sanitized-config';

Font.register({
  family: 'Open Sans',
  fonts: [
    {
      src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-regular.ttf',
    },
    {
      src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-600.ttf',
      fontWeight: 600,
    },
  ],
});

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
  },
  infoSection: {
    flexGrow: 1,
    maxWidth: 150,
    padding: 0,
  },
  referencesSection: {
    flexGrow: 1,
    backgroundColor: '#EFF0F0',
    borderRadius: 10,
  },
  image: {
    margin: 'auto',
    borderRadius: 50,
    marginBottom: 10,
    top: '0',
    marginTop: '0px',
    width: 100,
    height: 100,
  },
  header: {
    color: '#646B74',
    fontSize: 18,
    marginBottom: 5,
  },
  timeText: {
    color: '#646B74',
    fontSize: 10,
    width: '100%',
    textAlign: 'center',
  },
  subheader: {
    width: '100%',
    textAlign: 'center',
    color: '#646B74',
    fontSize: 14,
    marginBottom: 5,
  },
  text: {
    fontSize: 10,
    marginBottom: 5,
  },
  boldText: {
    fontSize: 10,
    marginBottom: 5,
    fontFamily: 'Open Sans',
    fontWeight: 'bold',
  },
  textShifted: {
    fontSize: 10,
    marginBottom: 2.5,
    marginLeft: 10,
  },
  positionText: {
    fontSize: 10,
    color: 'black',
    width: '100%',
    textAlign: 'center',
  },
  bioText: {
    fontSize: 10,
  },
  nameTitle: {
    fontSize: 15,
    marginBottom: 10,
    width: '100%',
    textAlign: 'center',
  },
  container: {
    marginTop: 5,
    marginBottom: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  containerTags: {
    marginTop: 10,
    marginBottom: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  listItem: {
    backgroundColor: '#5D1AFF',
    padding: '5px 10px',
    borderRadius: 50,
    alignSelf: 'flex-start',
    margin: 2, // Adds a little space between each tag
  },
  listItemContent: {
    fontWeight: 'bold',
    fontSize: 8,
    color: '#FFFFFF', // Ensures text color is white
  },
  listItemEdu: {
    width: '100%',
  },

  dateEdu: {
    fontSize: 8,
    color: '#303030',
  },
  titleEdu: {
    fontSize: 10,
    color: '#000',
  },

  projectsMaster: {
    padding: 10,
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    marginBottom: 10,
    maxWidth: 400,
  },
  projectPhoto: {
    marginBottom: 10,
    height: 40,
    width: 50,
    margin: 'auto',
    paddingLeft: '10px',
  },

  sectionMaster: {
    padding: 10,
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    boxShadow: '0 0 10px #000000',
    marginBottom: 10,
  },
});

interface ResumeProps {
  profile: Profile;
  config: SanitizedConfig;
  t: any;
}

function stringToRich(text: string) {
  // This regex finds all the <b>...</b> segments along with any text outside of them
  const regex = /<b>(.*?)<\/b>|([^<]+)(?=<b>|$)/g;
  let match;
  const elements = [];

  while ((match = regex.exec(text)) !== null) {
    // match[1] will contain the text within <b>...</b>, if present
    // match[2] will contain text outside of <b> tags
    if (match[1]) {
      elements.push(
        <Text key={match.index} style={styles.boldText}>
          {match[1]}
        </Text>,
      );
    } else if (match[2]) {
      elements.push(match[2]);
    }
  }

  return <Text style={styles.text}>{elements}</Text>;
}

// Create Document Component
const Resume = ({ profile, config, t }: ResumeProps) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Section #1 */}
      <View style={[styles.section, styles.infoSection]}>
        <View style={styles.sectionMaster}>
          {/* Picture */}
          <Image style={styles.image} src={profile.avatar} />
          {/* Text under picture */}
          <Text style={styles.nameTitle}>{profile.name}</Text>
          <Text style={styles.bioText}>{t('about_card.description')}</Text>
        </View>

        <View style={[styles.sectionMaster]}>
          {/* Skills */}
          <Text style={styles.header}>{t('contact_card.title')}</Text>
          <View style={styles.container}>
            <Text style={styles.text}>
              {t('contact_card.email')}: {config.social.email}
            </Text>
            <Text style={styles.text}>
              {t('contact_card.phone_nr')}: {config.social.phone}
            </Text>
          </View>
        </View>

        <View style={[styles.sectionMaster]}>
          {/* Skills */}
          <Text style={styles.header}>{t('tech_card.resume_title')}</Text>
          <View style={styles.container}>
            {config.skills.map((skill, index) => (
              <View style={styles.listItem} key={index}>
                <Text style={styles.listItemContent}>{skill}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Education Timeline */}
        <View style={[styles.sectionMaster]}>
          <View style={styles.sectionMaster}>
            <Text style={styles.header}>{t('education_card.title')}</Text>
            <View style={styles.container}>
              {config.educations.map((education, index) => (
                <View key={index}>
                  <Text style={styles.dateEdu}>
                    {education.from}-{education.to}
                  </Text>
                  <Text style={styles.titleEdu}>{education.degree}</Text>
                  <Text style={styles.dateEdu}>{education.institution}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
        <View style={styles.sectionMaster}>
          <Text style={styles.header}>{t('resume.about_me')}</Text>
          {t('resume.about_me_text')
            .split(', ')
            .map((text: string, _: number) => (
              <Text style={styles.text}>• {text}</Text>
            ))}
        </View>
      </View>

      {/* Section #2 */}
      <View style={[styles.section, styles.referencesSection]}>
        <Text style={styles.header}>
          {t('resume.why_i_applied_here_title')}
        </Text>
        <View style={styles.projectsMaster}>
          {t('resume.why_i_applied_here_text')
            .split('(, )')
            .map(
              (text: string, _: number) => stringToRich('• ' + text),
              // <Text style={styles.text}>{text}</Text>
            )}
        </View>
        <Text style={styles.header}>{t('resume.profile_text_title')}</Text>
        <View style={styles.projectsMaster}>
          {t('resume.profile_text')
            .split('(, )')
            .map(
              (text: string, _: number) => stringToRich('• ' + text + '\n'),
              // <Text style={styles.text}>{text}</Text>
            )}
        </View>
        <Text style={styles.header}>{t('projects_card.title')}</Text>
        {/* List of places worked */}
        {config.projects.external.projects.map(
          (project, index) =>
            project.is_side_project === false && (
              <View key={index} style={styles.projectsMaster}>
                <Text style={styles.subheader}>{project.title}</Text>

                <Image
                  style={styles.projectPhoto}
                  src={project.thumbnail_url}
                />
                <Text style={styles.positionText}>
                  {
                    config.experiences.filter(
                      (x) => x.company === project.title,
                    )[0].position
                  }
                </Text>
                <Text style={styles.timeText}>
                  {
                    config.experiences.filter(
                      (x) => x.company === project.title,
                    )[0].from
                  }{' '}
                  -{' '}
                  {t(
                    config.experiences.filter(
                      (x) => x.company === project.title,
                    )[0].to,
                  )}
                </Text>

                <View style={styles.containerTags}>
                  {project.tags &&
                    project.tags.map((tag, index) => (
                      <View style={styles.listItem} key={index}>
                        <Text style={styles.listItemContent}>{tag}</Text>
                      </View>
                    ))}
                </View>

                {t(project.title + '.description')
                  .split(/(•|○)/)
                  .map((text: string, index: number, array: string[]) => {
                    const trimmedText = text.trim();
                    // Skip empty strings and the actual bullet/indicator characters
                    if (
                      trimmedText === '' ||
                      trimmedText === '•' ||
                      trimmedText === '○'
                    ) {
                      return null;
                    }

                    // Check if the current segment was preceded by a • or ○
                    const bullet = array[index - 1];
                    if (bullet === '•') {
                      // For segments originally starting with •, render them normally
                      return stringToRich('• ' + trimmedText);
                    } else if (bullet === '○') {
                      // For segments originally starting with ○, render them with indentation
                      return (
                        <Text style={styles.textShifted}>
                          {'\t'}o {trimmedText}
                        </Text>
                      );
                    }
                  })}
              </View>
            ),
        )}
      </View>
    </Page>
  </Document>
);

export default Resume;
