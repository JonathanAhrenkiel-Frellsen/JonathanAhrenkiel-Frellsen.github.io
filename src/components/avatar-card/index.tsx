import { pdf } from '@react-pdf/renderer';
import { FALLBACK_IMAGE } from '../../constants';
import { Profile } from '../../interfaces/profile';
import { skeleton } from '../../utils';
import LazyImage from '../lazy-image';
import Resume from '../resume-pop-up/resume';
import { SanitizedConfig } from '../../interfaces/sanitized-config';
import { useTranslation } from 'react-i18next';

interface AvatarCardProps {
  profile: Profile | null;
  sanitizedConfig: SanitizedConfig | Record<string, never>;
  loading: boolean;
  avatarRing: boolean;
  resumeFileUrl?: string;
}

/**
 * Renders an AvatarCard component.
 * @param profile - The profile object.
 * @param loading - A boolean indicating if the profile is loading.
 * @param avatarRing - A boolean indicating if the avatar should have a ring.
 * @param resumeFileUrl - The URL of the resume file.
 * @returns JSX element representing the AvatarCard.
 */
const AvatarCard: React.FC<AvatarCardProps> = ({
  profile,
  sanitizedConfig,
  loading,
  avatarRing,
  resumeFileUrl,
}): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div className="card shadow-lg compact bg-base-100">
      <div className="grid place-items-center py-8">
        {loading || !profile ? (
          <div className="avatar opacity-90">
            <div className="mb-8 rounded-full w-32 h-32">
              {skeleton({
                widthCls: 'w-full',
                heightCls: 'h-full',
                shape: '',
              })}
            </div>
          </div>
        ) : (
          <div className="avatar opacity-90">
            <div
              className={`mb-8 rounded-full w-32 h-32 ${
                avatarRing
                  ? 'ring ring-primary ring-offset-base-100 ring-offset-2'
                  : ''
              }`}
            >
              {
                <LazyImage
                  src={profile.avatar ? profile.avatar : FALLBACK_IMAGE}
                  alt={profile.name}
                  placeholder={skeleton({
                    widthCls: 'w-full',
                    heightCls: 'h-full',
                    shape: '',
                  })}
                />
              }
            </div>
          </div>
        )}
        <div className="text-center mx-auto px-8">
          <h5 className="font-bold text-2xl">
            {loading || !profile ? (
              skeleton({ widthCls: 'w-48', heightCls: 'h-8' })
            ) : (
              <span className="text-base-content opacity-70">
                {profile.name}
              </span>
            )}
          </h5>
          <div className="mt-3 text-base-content text-opacity-60 font-mono">
            {loading || !profile
              ? skeleton({ widthCls: 'w-48', heightCls: 'h-5' })
              : t('about_card.description')}
          </div>
        </div>
        {resumeFileUrl &&
          (loading ? (
            <div className="mt-6">
              {skeleton({ widthCls: 'w-40', heightCls: 'h-8' })}
            </div>
          ) : (
            <div
              onClick={async () => {
                // check if sanitizedConfig has type SanitizedConfig

                if (
                  profile !== null &&
                  sanitizedConfig.hasOwnProperty('github')
                ) {
                  const blob = await pdf(
                    Resume({
                      profile: profile,
                      config: sanitizedConfig as any,
                      t: t,
                    }),
                  ).toBlob();
                  const url = URL.createObjectURL(blob);
                  window.open(url, '_blank');
                }
              }}
              className="btn btn-outline btn-sm text-xs mt-6 opacity-50"
              rel="noreferrer"
            >
              Download Resume
            </div>
          ))}
      </div>
    </div>
  );
};

export default AvatarCard;
